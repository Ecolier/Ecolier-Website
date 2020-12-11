const express = require('express')
const { Router } = require('express')
const { networkInterfaces } = require('os')
const path = require('path')
const { Bundle } = require('./bundle')

class Application {

    constructor (routes, options) {
        this.options = options
        this.routes = routes

        this._application = express()
        this._application.use(express.urlencoded({
            extended: true
        }))

        this.routes.forEach(route => {
            this.addRoute({
                path: '/',
                router: this._application, 
                controller: this.rootController
            }, route)
        })
    }

    addRoute (parent, route) {
        route.router = new Router({
            mergeParams: true
        })
        route.router.use(route.path, express.static(path.join(__dirname, '..', '..', 'dist')))
        parent.router.use(route.router)

        route.router[route.method](
            route.path,
            async (req, res) => {
                const rootController = new route.controller()

                const final = (req, res, next) => {
                    rootController.sendRenderedView(res)
                }

                const nextFunc = (middleware, index) => {
                    const next = rootController.middlewares[index + 1]
                    if (next) {
                        return () => {
                            middleware(req, res, nextFunc(next, index + 1))
                        }
                    }
                    else return () => { final(req, res) }
                }

                const nextFuncs = rootController.middlewares.map((middleware, index) => {
                    return nextFunc(middleware, index)
                })

                nextFuncs[0]()
            },
        )
    }

    run (port, callback) {
        this._application.listen(port, callback)
    }
}

module.exports = { Application }