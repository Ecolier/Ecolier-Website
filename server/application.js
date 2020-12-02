const express = require('express')
const path = require('path')

class Application {

    constructor (routes) {
        this.routes = routes
        this._application = express()
        this._application.set('view engine', 'ejs');
        this._application.use(express.static(path.join(__dirname, '..', 'public')))
        
        Object.keys(this.routes).forEach(path => {
            this._application.use(path, (req, res, next) => { 
                const controller = new this.routes[path]
                controller.data = { ...controller.data, ...req.params }
                this._application.use(path, controller.router)
                return next()
            })
        })
    }

    run (port, callback) {
        this._application.listen(port, callback)
    }
}

module.exports = { Application }