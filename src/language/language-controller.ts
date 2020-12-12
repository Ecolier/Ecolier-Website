import { Controller } from '../core/controller'
import * as express from 'express'

interface Translation {
    [locale: string]: any
}

class LanguageService {
    public readonly locales = [
        { code: 'fr', name: 'Français' },
        { code: 'en', name: 'English' },
    ]
    
    public readonly translations = {
        'fr': require('../translations/fr.json'),
        'en': require('../translations/en.json')
    }

    getLocaleIfAvailable (locale: string) {
        return this.locales.map(l => l.code).find(l => l === locale)
    }
}

export class LanguageController extends Controller {

    public readonly languageService = new LanguageService()
    public readonly availableLocales = this.languageService.locales
    public translations: Translation = {}
    public locale = ''

    constructor () {
        super()

        this.middlewares.push(
            this.checkLanguage.bind(this),
            this.getLanguage.bind(this)
        )
    }

    checkLanguage (req: express.Request, res: express.Response, next: express.NextFunction) {
        const pathComponents = req.path.split('/')
        const lang = pathComponents[1]
        
        if(this.languageService.getLocaleIfAvailable(lang)) {
            return next()
        }

        const path = pathComponents.slice(1, pathComponents.length).join('/')
        return res.redirect(`/${req.acceptsLanguages()[0].split('-')[0]}/${path}`)
    }

    getLanguage (req: express.Request, res: express.Response, next: express.NextFunction) {
        console.log(this)
        if(this.languageService.getLocaleIfAvailable(this.params.locale)) {
            this.locale = this.params.locale
            this.translations = this.translations[this.locale]
            return next()
        }
        return res.redirect('404')
    }
}

module.exports = { LanguageController }