import axios from 'axios'
import * as express from 'express'
import { BaseController } from '../../base/base-controller'
import { LandingView } from './landing-view'

export class LandingController extends BaseController {

    public view = new LandingView()
    public featured = []
    public article = {}

    constructor () {
        super()
        this.middlewares.push(this.fetchData.bind(this))
    }

    async fetchData (req: express.Request, res: express.Response, next: express.NextFunction) {
        const [featured, article] = await Promise.all([
            axios.get(`${process.env.SERVER}/${this.locale}/featured`), 
            axios.get(`${process.env.SERVER}/${this.locale}/article/ecolier`)
        ])
        this.featured = featured.data
        this.article = article.data
        this.view.landingData.featured = this.featured
        this.view.landingData.article = this.article
        return next()
    }
}
