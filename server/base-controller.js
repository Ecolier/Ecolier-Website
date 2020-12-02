const { Controller } = require('./controller')
const i18n = require('./i18n')

class BaseController extends Controller {
    constructor (template, data) {
        super(template, data)
        this.router.use((req, res, next) => { 
            if(i18n.getLocaleIfAvailable(this.data.locale)) {
                this.data.locales = i18n.locales
                this.data.translations = i18n.translations[this.data.locale]
                return next()
            }
            res.redirect(404)
        })
    }
}

module.exports = { BaseController }