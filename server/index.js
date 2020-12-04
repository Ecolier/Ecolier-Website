const debug = require('debug')('ecolier')

const { Application } = require('./application')
const { LandingController } = require('./landing-controller')
const { LanguageController } = require('./language-controller')
const { ProductController } = require('./product-controller')

const environment = process.env.NODE_ENV ?? 'development'
if (environment === 'development') { require('dotenv').config({ path: '.env.dev' }) }
if (environment === 'production')  { require('dotenv').config({ path: '.env.prod' }) }

const application = new Application([
    { path: '/', method: 'get', controller: new LanguageController() },
    { path: '/:locale(\[a-z]{2})', method: 'get', controller: new LandingController(), routes: [
        { path: '/product/:product', method: 'get', controller: new ProductController() }
    ]},
])

application.run(process.env.PORT, () => { 
    debug(`Listening on port ${process.env.PORT}`)
})