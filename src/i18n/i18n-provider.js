import { Component } from "../core/component"

var _instance = null

export class I18nProvider {
    constructor () {
        this.components = []
        this.locale = ''
        this.builtInTranslations = []
    }

    static getInstance () {
        if (_instance == null) {
            _instance = new I18nProvider()
            return _instance
        } else { return _instance }
    }

    setLocale (locale) {
        this.locale = locale
    }

    getLocale () {
        return this.locale
    }

    setBuiltInTranslations (translations) {
        this.builtInTranslations = translations
    }

    getBuiltInTranslations () {
        return this.builtInTranslations
    }

    registerComponent (component) {
        this.components.push(component)
    }

    updateTranslations (locale) {
        this.components.forEach(component => {
            component.applyTranslations(locale)
        })
    }
}

export class I18n extends Component {
    constructor (element, template, data) {
        super(element, template, data)
        I18nProvider.getInstance().registerComponent(this)
        this.translationCallback = null
    }

    applyTranslations (locale) {
        const translate = this.translationCallback ?? this.getDefaultTranslations.bind(this)
        translate(locale).then(translations => {
            this.updateTranslations(translations)
        })
    }

    updateTranslations (translations) {
        Object.keys(translations).forEach(id => {
            this.element.querySelector(`[aria-i18n="${id}"]`).innerHTML = translations[id]
        })
    }

    getDefaultTranslations (locale) {
        const res = { }
        this.element.querySelectorAll('[aria-i18n]').forEach(e => {
            const id = e.getAttribute('aria-i18n')
            const translation = I18nProvider.getInstance().getBuiltInTranslations().find(t => t.code === locale)
            res[id] = translation.translations[id]
        })
        return Promise.resolve(res)
    }
}