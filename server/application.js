const express = require('express')
const { Router, application } = require('express')
const path = require('path')

class Application {

    constructor (routes) {
        this.routes = routes
        this.self = this
        this._application = express()
        this._application.set('view engine', 'ejs');
        this._application.use(express.static(path.join(__dirname, '..', 'public')))
        
        this.routes.forEach(route => {
            this.addRoute(this._application, route)
        })
    }

    addRoute (parent, route, options) {

        options = options ?? { }
        if (options.child === true) {
            route.router = Router({ mergeParams: true })
            parent.use(options.parentPath, route.router)
        } else {
            route.router = Router()
            parent.use(route.router)
        }

        route.router[route.method](route.path, (req, res, next) => {
            route.controller.data = { ...route.controller.data, ...req.params }
            return next()
        }, 
        ...route.controller.getMiddlewares(),
        route.controller.render.bind(route.controller))

        if (route.routes) {
            route.routes.forEach(subroute => {
                this.addRoute(route.router, subroute, { child: true, parentPath: route.path })
            })
        }
    }

    run (port, callback) {
        this._application.listen(port, callback)
    }
}

module.exports = { Application }