const { Controller } = require('./controller')
const i18n = require('./i18n')

class BaseController extends Controller {
    constructor (options, data) {
        super(options, data)
        this.addMiddleware(this.getLanguage.bind(this))
    }

    getLanguage (req, res, next) {
        if(i18n.getLocaleIfAvailable(this.data.locale)) {
            this.data.locales = i18n.locales
            this.data.translations = i18n.translations[this.data.locale]
            return next()
        }
        res.redirect(404)
    }
}

module.exports = { BaseController }