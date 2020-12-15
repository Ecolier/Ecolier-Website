const renderer = require('ejs')
const debug = require('debug')('ecolier')
import * as fs from 'fs'
import * as path from 'path'
import 'reflect-metadata'

type SubviewList = [id: string, view: View][]
type PropertyList = [name: string, value: string][]

export interface ViewData { }

interface ToRender {
    [alias: string]: string | string[]
}

export function renderable(alias?: string) {
    return function(target: View, propertyKey: string) {
        if (Reflect.get(target, 'toRender') === undefined) {
            Reflect.set(target, 'toRender', [])
        }
        const toRender = Reflect.get(target, 'toRender') as ToRender
        
        const key = alias ?? 'data'
        if (toRender[key]) {
            if (Array.isArray(toRender[key])) (toRender[key] as string[]).push(propertyKey)
            else toRender[key] = [toRender[key] as string, propertyKey]
        }
        else toRender[key] = propertyKey
        Reflect.set(target, 'toRender', toRender)
    }
}

export class View {
    [data: string]: any
    
    public readonly properties: PropertyList = []
    public readonly subviews: SubviewList = []
    
    constructor (public readonly template: string = '') { }
    
    updateData (data: any) {
        this.data = { ...this.data, ...data }
    }
    
    addSubview (id: string, subview: View) {
        debug('adding subview', subview.constructor.name, 'to', this.constructor.name)
        this.subviews.push([id, subview])
    }
    
    resolveViewPath (paths: string[]) {
        const found = paths.find(viewPath => fs.existsSync(path.join(viewPath, this.template)))
        if (found) return path.join(found, this.template)
        else throw `Could not resolve ${this.template}`
    }

    async render (paths: string[]) {        
        const foundTemplate = this.resolveViewPath(paths)
        const renderedSubviews: [id: string, DOM: string][] = []
        
        const toRender = Reflect.get(this, 'toRender') as ToRender

        const allData = Object.keys(toRender).reduce((acc, curr) => {
            var bigres = { }
            var res = toRender[curr]
            if (Array.isArray(toRender[curr])) {
                const a = (res as string[]).reduce((acc2, curr2) => {
                    if (typeof this[curr2] === 'object') {
                        return { ...acc2, ...this[curr2] }
                    }
                    else return { ...acc2, [curr2]: this[curr2] }
                }, {})
                bigres = { [curr]: a }
            } else {
                bigres = { [curr]: this[res as string] }
            }
            return { ...acc, ...bigres }
        }, {})
        
        for (const subview of this.subviews) {
            await subview[1].render(paths).then(rendered => {
                renderedSubviews.push([subview[0], rendered])
            })
        }
        
        debug('rendering', this.constructor.name, 'with template', foundTemplate)
        var result = Promise.resolve('')
        
        try {
            result = await renderer.renderFile(foundTemplate, { 
                ...allData,
                properties: this.properties
            }, { views: paths })
        } catch (error) {
            debug(error)
        }
        
        return result
    }
}
    