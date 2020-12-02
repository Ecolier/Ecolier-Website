const locales = [
    { code: 'fr', name: 'Français' },
    { code: 'en', name: 'English' },
]

const translations = {
    'fr': require('./translations/fr.json'),
    'en': require('./translations/en.json')
}

const getLocaleIfAvailable = locale => {
    return locales.map(l => l.code).find(l => l === locale)
}

module.exports = { 
    locales, 
    translations, 
    getLocaleIfAvailable
}