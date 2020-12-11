class Controller {
    constructor (data) {
        this._data = data ?? {}
        this.parent = {}
        this.view = {}
        this.middlewares = []
        this.children = []

        this.middlewareIterator = 0

        this.addMiddleware(this.extendDataFromRequestParams.bind(this))
    }

    set data (data) {
        this._data = data
    }

    get data () {
        return this._data;
    }

    updateData (data) {
        this.data = { ...this.data, ...data }
    }

    extendDataFromRequestParams (req, res, next) {
        Object.keys(req.params).forEach(paramName => {
            this.data[paramName] = req.params[paramName]
        })
        return next()
    }

    async sendRenderedView (res) {
        res.set('Content-Type', 'text/html')
        const view = await this.view.render()
        return res.send(Buffer.from(view))
    }

    addChild (controller) {
        controller.parent = this
        this.children.push(controller)
    }

    addMiddleware (...middlewares) {
        this.middlewares.push(...middlewares)
    }
}

module.exports = { Controller }