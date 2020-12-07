const { Controller } = require('./controller')
const i18n = require('./i18n')

class LanguageController extends Controller {
    constructor (data) {
        super(data)

        this.addMiddleware(
            this.checkLanguage.bind(this),
            this.getLanguage.bind(this))
    }

    checkLanguage (req, res, next) {
        const pathComponents = req.path.split('/')
        const lang = pathComponents[1]
        console.log(lang)
        if(i18n.getLocaleIfAvailable(lang)) {
            return next()
        }
        const path = pathComponents.slice(1, pathComponents.length).join('/')
        return res.redirect(`/${req.acceptsLanguages()[0].split('-')[0]}/${path}`)
    }

    getLanguage (req, res, next) {
        if(i18n.getLocaleIfAvailable(this.data.locale)) {
            this.data.locales = i18n.locales
            this.data.translations = i18n.translations[this.data.locale]

            this.data.locales.forEach(locale => {
                const url = req.originalUrl.split('/')
                url[1] = locale.code
                locale.localizedPath = url.join('/')
            })
            
            return next()
        }
        res.redirect(404)
    }
}

module.exports = { LanguageController }