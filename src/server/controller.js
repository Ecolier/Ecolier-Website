const { Router } = require('express')

class Controller {
    constructor (data) {
        this.data = data ?? {}
        this._middlewares = []
    }

    getMiddlewares () {
        return this._middlewares
    }

    addMiddleware (...middlewares) {
        this._middlewares.push(middlewares)
    }
}

module.exports = { Controller }