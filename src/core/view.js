const renderer = require('ejs')
const debug = require('debug')('ecolier')
const { Bundle } = require('./bundle')

class View {
    constructor (template, data) {
        this.template = template
        this._data = data ?? {}
        this.properties = {}
        this.subviews = {}
    }

    set data (data) {
        this._data = data
    }

    get data () {
        return this._data
    }

    updateData (data) {
        this.data = { ...this.data, ...data }
    }

    addSubview (name, subview) {
        debug('adding subview', subview.constructor.name, 'to', this.constructor.name)
        this.subviews[name] = subview
    }

    async render () {
        const bundle = Bundle.instance()
        const foundTemplate = bundle.resolveView(this.template)
        const renderedSubviews = { }

        for (const name of Object.keys(this.subviews)) {
            await this.subviews[name].render().then(rendered => {
                renderedSubviews[name] = rendered
            })
        }

        debug('rendering', this.constructor.name, 'with template', foundTemplate)
        var result = Promise.resolve('')

        try {
            result = await renderer.renderFile(foundTemplate, { 
                data: this.data,
                properties: this.properties,
                subviews: renderedSubviews 
            }, { views: bundle.viewPaths })
        } catch (error) {
            debug(error)
        }

        return result
    }
}

module.exports = { View }