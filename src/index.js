import './application/application-component'
import { Application } from './application/application-component'
import './style.scss'

window.locales = [
    { code: 'fr', name: 'Français', translations: require('./translations/fr.json') },
    { code: 'en', name: 'English', translations: require('./translations/en.json') },
]

const defaultLocale = navigator.language.split('-')[0]
const selectedLocale = window.locales.find(locale => locale.code === defaultLocale)
selectedLocale.selected = true
window.locale = selectedLocale.translations

const application = new Application(document.getElementById('application'))

export { application }