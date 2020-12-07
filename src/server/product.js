const markdown = require('markdown-it')()
const axios = require('axios').default
const path = require('path')

const { BaseController } = require('./base')

class ProductController extends BaseController {
    constructor () {
        super()
        this.addMiddleware(this.fetchData.bind(this))
    }
    
    async fetchData (req, res, next) {      
        const productResponse = await axios.get(`${process.env.SERVER}/${this.data.locale}/product/${this.data.product}`)
        const product = productResponse.data

        var productContent = ''
        var contents = []
        
        if (product.content) {
            const parsed = markdown.parse(product.content)
            
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
            product: product,
            productContent: productContent,
            summary: contents,
            title: `${product.name} - ${product.description}`,
            hyphenate: str => { return str.replace(/\s/g, '-').toLowerCase() }
        }

        return next()
    }
}

module.exports = { ProductController }