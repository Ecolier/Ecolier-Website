import { I18n } from '../i18n/i18n-provider'
import template from './footer.ejs'

export class Footer extends I18n {
    constructor (element) {
        super(element, template)
    }
}