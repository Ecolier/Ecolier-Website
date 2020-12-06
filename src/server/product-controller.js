const markdown = require('markdown-it')()
const axios = require('axios').default
const path = require('path')

const { BaseController } = require('./base-controller')

class ProductController extends BaseController {
    constructor () {
        super({
            template: 'product.ejs'
        })
        this.addMiddleware(this.fetchData.bind(this))
    }
    
    async fetchData (req, res, next) {      
        const [product, products] = await Promise.all([
            axios.get(`${process.env.SERVER}/${this.data.locale}/product/${this.data.product}`), 
            axios.get(`${process.env.SERVER}/${this.data.locale}/products`)
        ])
        
        var productContent = ''
        var contents = []
        
        if (product.data.content) {
            const parsed = markdown.parse(product.data.content)
            
            parsed.forEach((token, index) => {
                if (token.type === 'heading_open') {
                    const c = parsed[index + 1].content
                    token.attrPush(['id', c.replace(/\s/g, '-').toLowerCase()])
                    contents.push(c)
                }
            })
            
            productContent = markdown.renderer.render(parsed)
        }
        
        this.data = { 
            ...this.data, 
            product: product.data,
            products: products.data,
            productContent: productContent,
            summary: contents,
            title: `${product.data.name} - ${product.data.description}`,
            hyphenate: str => { return str.replace(/\s/g, '-').toLowerCase() }
        }

        return next()
    }
}

module.exports = { ProductController }