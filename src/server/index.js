const debug = require('debug')('ecolier')

const { Application } = require('./application')
const { LandingController } = require('./landing')
const { LanguageController } = require('./language')
const { ProductController } = require('./product')
const { DeveloperController } = require('./developer')
const { OrganizationController } = require('./organization')

const environment = process.env.NODE_ENV ?? 'development'
if (environment === 'development') { require('dotenv').config({ path: '.env.dev' }) }
if (environment === 'production')  { require('dotenv').config({ path: '.env.prod' }) }

const application = new Application(require('./routes'))

application.run(process.env.PORT, () => { 
    debug(`Listening on port ${process.env.PORT}`)
})