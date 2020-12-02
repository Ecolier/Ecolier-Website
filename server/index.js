const debug = require('debug')('ecolier')

const { Application } = require('./application')
const { LandingController } = require('./landing-controller')
const { LanguageController } = require('./language-controller')
const { ProductController } = require('./product-controller')

const environment = process.env.NODE_ENV ?? 'development'
if (environment === 'development') { require('dotenv').config({ path: '.env.dev' }) }
if (environment === 'production')  { require('dotenv').config({ path: '.env.prod' }) }

const application = new Application({
    '/': LanguageController,
    '/:locale': LandingController,
    '/:locale/product/:product': ProductController
})

application.run(process.env.PORT, () => { 
    debug(`Listening on port ${process.env.PORT}`)
})