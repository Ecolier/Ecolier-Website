const express = require('express')
const path = require('path')
const axios = require('axios').default
const config = require('../config.json')

const application = express()
application.set('view engine', 'ejs');
application.use(express.static(path.join(__dirname, '..', 'public')))

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

application.get('/', (req, res, next) => {
    return res.redirect(`/${req.acceptsLanguages()[0].split('-')[0]}`)
})

application.get('/:locale', 
(req, res, next) => { return getLocaleIfAvailable(req.params.locale) ? next() : res.redirect(404) }, 
async (req, res, next) => {
    const featured = await axios.get(`${config.server}/${req.params.locale}/featured`)
    const article = await axios.get(`${config.server}/${req.params.locale}/article/ecolier`)
    res.render(path.resolve(__dirname, '..', 'public', 'index.ejs'), {
        locale: req.params.locale,
        previews: featured.data,
        article: article.data[0],
        locales: locales,
        translations: translations[req.params.locale]
    })
})

application.listen(8080, () => {
    console.log('application is running on port *:8080')
})