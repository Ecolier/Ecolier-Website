import { Controller } from '../core/controller'
import * as express from 'express'
import { LanguageView } from './language-view'
import { Locale, LocalizedPaths, Translation } from './language-model'

class LanguageService {
    public readonly locales: Locale[] = [
        { code: 'fr', name: 'Français' },
        { code: 'en', name: 'English' },
    ]
    
    public readonly translations: Translation = {
        'fr': require('../translations/fr.json'),
        'en': require('../translations/en.json')
    }

    getLocaleIfAvailable (locale: string) {
        return this.locales.map(l => l.code).find(l => l === locale)
    }
}

export class LanguageController extends Controller {

    public view?: LanguageView
    public readonly languageService = new LanguageService()
    public readonly availableLocales = this.languageService.locales
    public translations: Translation = {}
    public localizedPaths: LocalizedPaths = {}
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
        if(this.languageService.getLocaleIfAvailable(this.params.locale)) {
            this.locale = this.params.locale
            this.translations = this.languageService.translations[this.locale]

            this.localizedPaths = this.availableLocales.reduce((acc, curr) => {
                const url = req.originalUrl.split('/')
                url[1] = curr.code
                return { ...acc, [curr.code]: url.join('/') }
            }, {})

            if (this.view) {
                this.view.languageData.localizedPaths = this.localizedPaths
                this.view.languageData.availableLocales = this.availableLocales
                this.view.languageData.locale = this.locale
                this.view.languageData.translations = this.translations
            }

            return next()
        }
        
        return res.redirect('404')
    }
}

module.exports = { LanguageController }