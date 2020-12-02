const { Router } = require('express')

class Controller {
    constructor (template, data) {
        this.data = data ?? { }
        this.template = template ?? ''
        this.router = new Router({ mergeParams: true })
    }

    render (req, res, next) {
        return res.render(this.template, this.data)
    }
}

module.exports = { Controller }