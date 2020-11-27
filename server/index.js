const express = require('express')
const path = require('path')
const axios = require('axios').default
const debug = require('debug')('ecolier')

const environment = process.env.NODE_ENV ?? 'development'
if (environment === 'development') { require('dotenv').config({ path: '.env.dev' }) }
if (environment === 'production') {  require('dotenv').config({ path: '.env.prod' }) }

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
    const featured = await axios.get(`${process.env.SERVER}/${req.params.locale}/featured`)
    const article = await axios.get(`${process.env.SERVER}/${req.params.locale}/article/ecolier`)
    const products = await axios.get(`${process.env.SERVER}/${req.params.locale}/products`)
    res.render(path.resolve(__dirname, '..', 'public', 'index.ejs'), {
        locale: req.params.locale,
        previews: featured.data,
        article: article.data[0],
        locales: locales,
        translations: translations[req.params.locale],
        products: products.data
    })
})

application.get('/:locale/product/:product', 
(req, res, next) => { return getLocaleIfAvailable(req.params.locale) ? next() : res.redirect(404) }, 
async (req, res, next) => {
    const product = await axios.get(`${process.env.SERVER}/${req.params.locale}/product/${req.params.product}`)
    const products = await axios.get(`${process.env.SERVER}/${req.params.locale}/products`)
    res.render(path.resolve(__dirname, '..', 'public', 'product.ejs'), {
        locale: req.params.locale,
        product: product.data,
        locales: locales,
        translations: translations[req.params.locale],
        products: products.data
    })
})

application.listen(process.env.PORT, () => {
    debug(`Listening on port ${process.env.PORT}`)
})