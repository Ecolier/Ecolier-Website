const { Router } = require('express')

class Controller {
    constructor (options, data) {
        this.options = options ?? {}
        this.template = this.options.template ?? ''
        this.data = data ?? {}
        this._middlewares = []
    }

    getMiddlewares () {
        return this._middlewares
    }

    addMiddleware (middleware) {
        this._middlewares.push(middleware)
    }

    render (req, res, next) { 
        return res.render(this.template, this.data)
    }
}

module.exports = { Controller }