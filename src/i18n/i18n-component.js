import { LocalePicker } from '../locale-picker/locale-picker-component'
import { Dropdown } from '../dropdown/dropdown-component'
import { I18n, I18nProvider } from './i18n-provider'
import template from './i18n.ejs'

export class I18nComponent extends I18n {
    constructor (element) {
        super(element, template)

        this.dropdown = new Dropdown(
            document.getElementById('navbar-menu'),
            document.getElementById('navbar-dropdown-trigger')
        )
    
        const availableLocales = I18nProvider.getInstance().getBuiltInTranslations().map(translation => {
            const locale = {
                code: translation.code,
                name: translation.name
            }
            if (I18nProvider.getInstance().getLocale() == locale.code) locale.selected = true
            return locale
        })

        this.localePicker = new LocalePicker(
            document.getElementById('locale-picker'), 
            availableLocales
        )

        this.localePicker.onLocaleChanged = locale => {
            I18nProvider.getInstance().updateTranslations(locale.code)
        }
    }
}