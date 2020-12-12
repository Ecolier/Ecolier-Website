import * as express from 'express'
import { View } from './view'
import { Middleware } from './middleware'

interface Params {
    [name: string]: string
}

export class Controller {
    public view?: View
    public readonly middlewares: Middleware[] = []
    public readonly params: Params = {}

    constructor () {
        this.middlewares.push(this.extendDataFromRequestParams.bind(this))
    }

    extendDataFromRequestParams (req: express.Request, res: express.Response, next: express.NextFunction) {
        Object.keys(req.params).forEach(paramName => {
            this.params[paramName] = req.params[paramName]
        })
        return next()
    }

    async sendRenderedView (res: express.Response, paths: string[]) {
        if (!this.view) {
            throw `Trying to render ${this.constructor.name} which has no view`
        }
        res.set('Content-Type', 'text/html')
        const view = await this.view.render(paths)
        return res.send(Buffer.from(view))
    }
}