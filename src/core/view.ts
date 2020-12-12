const renderer = require('ejs')
const debug = require('debug')('ecolier')
import * as fs from 'fs'
import * as path from 'path'

type SubviewList = [id: string, view: View][]
type PropertyList = [name: string, value: string][]

export class View {
    [data: string]: any

    public readonly properties: PropertyList = []
    public readonly subviews: SubviewList = []

    constructor (public readonly template: string, data?: [string: any]) { }

    updateData (data: any) {
        this.data = { ...this.data, ...data }
    }

    addSubview (id: string, subview: View) {
        debug('adding subview', subview.constructor.name, 'to', this.constructor.name)
        this.subviews.push([id, subview])
    }

    resolveViewPath (paths: string[]) {
        const found = paths.find(viewPath => 
            fs.existsSync(path.join(viewPath, this.template))
        )
        if (found) return path.join(found, this.template)
        else throw `Could not resolve ${this.template}`
    }

    async render (paths: string[]) {
        console.log(paths)
        const foundTemplate = this.resolveViewPath(paths)
        const renderedSubviews: [id: string, DOM: string][] = []

        for (const subview of this.subviews) {
            await subview[1].render(paths).then(rendered => {
                renderedSubviews.push([subview[0], rendered])
            })
        }

        debug('rendering', this.constructor.name, 'with template', foundTemplate)
        var result = Promise.resolve('')

        try {
            result = await renderer.renderFile(foundTemplate, { 
                data: this.data,
                properties: this.properties,
                subviews: renderedSubviews 
            }, { views: paths })
        } catch (error) {
            debug(error)
        }

        return result
    }
}
