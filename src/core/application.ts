import * as express from 'express'
import { Route } from './route'
import { Middleware } from './middleware'

type RouteArray = Array<Exclude<Route, "router">> 

interface ApplicationOptions {
    viewPaths: string[]
    staticPath: string
}

export class Application {

    private application: express.Application

    constructor (public readonly routes: RouteArray, public readonly options: ApplicationOptions) {
        this.application = express()
        this.application.use(express.urlencoded({
            extended: true
        }))

        this.routes.forEach(route => {
            this.addRoute(route)
        })
    }

    addRoute (route: Route) {

        route.router = express.Router({
            mergeParams: true
        })

        route.router.use(route.path, express.static(this.options.staticPath))

        this.application.use(route.router)

        route.router.all(
            route.path,
            async (req: express.Request, res: express.Response) => {
                const rootController = new route.controller()
                const final = (req: express.Request, res: express.Response) => {
                    rootController.sendRenderedView(res, this.options.viewPaths)
                }
                const nextFunc = (middleware: Middleware, index: number) => {
                    const next = rootController.middlewares[index + 1]
                    return () => {
                        middleware(req, res, next ? nextFunc(next, index + 1) : () => final(req, res))
                    }
                }
                const nextFuncs = rootController.middlewares.map((middleware, index) => {
                    return nextFunc(middleware, index)
                })
                nextFuncs[0]()
            },
        )
    }

    run (port: number, callback: () => void) {
        this.application.listen(port, callback)
    }
}

module.exports = { Application }