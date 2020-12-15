const markdown = require('markdown-it')()
import axios from 'axios'
import { BaseController } from '../../base/base-controller'
import * as express from 'express'
import { ProductView } from './product-view'
import { Product } from './product-model'

export class ProductController extends BaseController {

    public view = new ProductView()
    public product: Partial<Product> = {}

    constructor () {
        super()
        this.middlewares.push(this.fetchData.bind(this))
    }
    
    async fetchData (req: express.Request, res: express.Response, next: express.NextFunction) {      
        const productResponse = await axios.get(`${process.env.SERVER}/${this.params.locale}/product/${this.params.product}`)

        if (productResponse.data.content) {
            const parsed = markdown.parse(productResponse.data.content)
            parsed.forEach((token: any, index: number) => {
                if (token.type === 'heading_open') {
                    const c = parsed[index + 1].content
                    token.attrPush(['id', c.replace(/\s/g, '-').toLowerCase()])
                    this.view.summary.titles.push(c)
                }
            })
            
            const renderedContent = markdown.renderer.render(parsed)
            this.product = {
                ...productResponse.data,
                content: renderedContent
            }
            this.view.product = this.product
        }

        return next()
    }
}

module.exports = { ProductController }