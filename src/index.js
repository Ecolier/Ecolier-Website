import './application/application-component'
import { Application } from './application/application-component'
import { I18nProvider } from './i18n/i18n-provider'
import './style.scss'

const navigatorLocale = navigator.language.split('-')[0]
I18nProvider.getInstance().setLocale(navigatorLocale)
I18nProvider.getInstance().setBuiltInTranslations([
    { code: 'fr', name: 'Français', translations: require('./translations/fr.json') },
    { code: 'en', name: 'English', translations: require('./translations/en.json') },
])

const application = new Application(document.getElementById('application'))

export { application }