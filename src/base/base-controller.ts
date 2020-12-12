import axios from 'axios'
import * as express from 'express'
import { LanguageController } from '../language/language-controller'

export class BaseController extends LanguageController {

    public products = []

    constructor () {
        super()
        this.middlewares.push(this.getProducts.bind(this))
    }

    async getProducts (req: express.Request, res: express.Response, next: express.NextFunction) {
        this.products = (await axios.get(`${process.env.SERVER}/${this.locale}/products`)).data
        return next()
    }

}

module.exports = { BaseController }