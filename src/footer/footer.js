import { I18n, I18nProvider } from '../i18n/i18n-provider'
import template from './footer.ejs'

export class Footer extends I18n {
    constructor (element) {
        super(element, template)
        this.applyTranslations(I18nProvider.getInstance().getLocale())
    }
}