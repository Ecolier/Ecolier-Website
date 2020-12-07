const axios = require('axios').default
const { LanguageController } = require('./language')

class BaseController extends LanguageController {
    constructor (data) {
        super(data)
        this.addMiddleware(
            this.getProducts.bind(this)
        )
    }

    async getProducts (req, res, next) {
        const productsResponse = await axios.get(`${process.env.SERVER}/${this.data.locale}/products`)
        this.data.products = productsResponse.data
        return next()
    }

}

module.exports = { BaseController }