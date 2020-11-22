import { Component } from "../core/component"

var _instance = null

export class I18nProvider {
    constructor () {
        this.components = []
    }

    static getInstance () {
        if (_instance == null) {
            _instance = new I18nProvider()
            return _instance
        } else { return _instance }
    }

    registerComponent (component) {
        this.components.push(component)
    }

    updateTranslations (locale) {
        this.components.forEach(component => {
            component.getTranslations(locale).then(translations => {
                component.updateTranslations(translations)
            })
        })
    }
}

export class I18n extends Component {
    constructor (element, template, data) {
        super(element, template, data)
        I18nProvider.getInstance().registerComponent(this)
    }

    updateTranslations (translations) {
        Object.keys(translations).forEach(id => {
            this.element.querySelector(`[aria-i18n="${id}"]`).innerHTML = translations[id]
        })
    }

    getTranslations (locale) { 
        const selectedLocale = window.locales.find(l => l.code === locale)
        return Promise.resolve(selectedLocale.translations)
    }
}