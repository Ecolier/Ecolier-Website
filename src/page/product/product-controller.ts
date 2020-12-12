const markdown = require('markdown-it')()
import axios from 'axios'
import * as path from 'path'
import { BaseController } from '../../base/base-controller'
import * as express from 'express'

interface Product {
    content?: string
}

export class ProductController extends BaseController {

    public product: Product = {}
    public renderedContent = ''
    public summary: any[] = []

    constructor () {
        super()
        this.middlewares.push(this.fetchData.bind(this))
    }
    
    async fetchData (req: express.Request, res: express.Response, next: express.NextFunction) {      
        const productResponse = await axios.get(`${process.env.SERVER}/${this.locale}/product/${this.product}`)
        this.product = productResponse.data

        if (this.product.content) {
            const parsed = markdown.parse(this.product.content)
            parsed.forEach((token: any, index: number) => {
                if (token.type === 'heading_open') {
                    const c = parsed[index + 1].content
                    token.attrPush(['id', c.replace(/\s/g, '-').toLowerCase()])
                    this.summary.push(c)
                }
            })
            this.renderedContent = markdown.renderer.render(parsed)
        }

        return next()
    }
}

module.exports = { ProductController }