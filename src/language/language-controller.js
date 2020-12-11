const { Controller } = require('../core/controller')

class LanguageController extends Controller {
    constructor (data) {
        super({
            ...data,
            availableLocales: [],
            translations: {},
            locale: ''
        })

        this.locales = [
            { code: 'fr', name: 'Français' },
            { code: 'en', name: 'English' },
        ]
        
        this.translations = {
            'fr': require('../translations/fr.json'),
            'en': require('../translations/en.json')
        }

        this.addMiddleware(
            this.checkLanguage.bind(this),
            this.getLanguage.bind(this)
        )
    }

    getLocaleIfAvailable = locale => {
        return this.locales.map(l => l.code).find(l => l === locale)
    }

    checkLanguage (req, res, next) {
        const pathComponents = req.path.split('/')
        const lang = pathComponents[1]
        
        if(this.getLocaleIfAvailable(lang)) {
            return next()
        }

        const path = pathComponents.slice(1, pathComponents.length).join('/')
        return res.redirect(`/${req.acceptsLanguages()[0].split('-')[0]}/${path}`)
    }

    getLanguage (req, res, next) {
        
        if(this.getLocaleIfAvailable(this.data.locale)) {

            this.updateData({
                availableLocales: this.locales,
                translations: this.translations[this.data.locale]
            })

            this.view.updateData({
                locale: this.data.locale,
                availableLocales: this.locales,
                translations: this.translations[this.data.locale]
            })

            this.data.availableLocales.forEach(locale => {
                const url = req.originalUrl.split('/')
                url[1] = locale.code
                locale.localizedPath = url.join('/')
            })
            
            return next()
        }
        return res.redirect(404)
    }
}

module.exports = { LanguageController }