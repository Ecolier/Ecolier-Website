const axios = require('axios').default
const { LanguageController } = require('../language/language-controller')

class BaseController extends LanguageController {
    constructor (data) {
        super({
            ...data,
            products: []
        })

        this.addMiddleware(this.getProducts.bind(this))
    }

    async getProducts (req, res, next) {
        const productsResponse = await axios.get(`${process.env.SERVER}/${this.data.locale}/products`)

        this.updateData({
            products: productsResponse.data
        })

        this.view.navbar.updateData({
            products: productsResponse.data,
            translations: this.data.translations
        })

        this.view.footer.updateData({
            products: productsResponse.data,
            translations: this.data.translations
        })

        return next()
    }

}

module.exports = { BaseController }