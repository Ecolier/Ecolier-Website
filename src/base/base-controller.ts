import axios from 'axios'
import * as express from 'express'
import { LanguageController } from '../language/language-controller'
import { BaseView } from './base-view'

export class BaseController extends LanguageController {

    public products: any[] = []
    public view?: BaseView

    constructor () {
        super()
        this.middlewares.push(this.getProducts.bind(this))
    }

    async getProducts (req: express.Request, res: express.Response, next: express.NextFunction) {
        this.products = (await axios.get(`${process.env.SERVER}/${this.locale}/products`)).data
        if (this.view) {
            this.view.products = this.products
        }
        return next()
    }

}

module.exports = { BaseController }