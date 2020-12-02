const axios = require('axios').default
const path = require('path')

const { BaseController } = require('./base-controller')

class LandingController extends BaseController {
    constructor () {
        super(path.resolve(__dirname, '..', 'public', 'landing.ejs'), {
            title: 'Ecolier'
        })
        this.router.get('/', this.fetchData.bind(this), this.render.bind(this) )
    }

    async fetchData (req, res, next) {      
        const [previews, article, products] = await Promise.all([
            axios.get(`${process.env.SERVER}/${this.data.locale}/featured`), 
            axios.get(`${process.env.SERVER}/${this.data.locale}/article/ecolier`),
            axios.get(`${process.env.SERVER}/${this.data.locale}/products`)])
        this.data = { ...this.data, previews: previews.data, article: article.data, products: products.data }
        return next()
    }
}

module.exports = { LandingController }