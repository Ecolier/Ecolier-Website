import { LocalePicker } from '../locale-picker/locale-picker-component'
import { Dropdown } from '../dropdown/dropdown-component'
import { Component } from '../core/component'
import template from './i18n.ejs'
import { I18n } from './i18n-provider'

export class I18nComponent extends I18n {
    constructor (element) {
        super(element, template)

        this.dropdown = new Dropdown(
            document.getElementById('navbar-menu'),
            document.getElementById('navbar-dropdown-trigger')
        )
    
        this.localePicker = new LocalePicker(
            document.getElementById('locale-picker'), 
            window.locales
        )

        this.localePicker.onLocaleChanged = locale => {
            I18nProvider.getInstance().updateTranslations(locale.code)
        }

        this.getTranslations('en').then(translations => {
            this.updateTranslations(translations)
        })
    }
}