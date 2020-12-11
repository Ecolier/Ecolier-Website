const debug = require('debug')('ecolier')
const path = require('path')

const { Application } = require('./core/application')
const { Bundle } = require('./core/bundle')

const environment = process.env.NODE_ENV ?? 'development'
if (environment === 'development') { require('dotenv').config({ path: '.env.dev' }) }
if (environment === 'production')  { require('dotenv').config({ path: '.env.prod' }) }

const bundle = Bundle.instance()
bundle.viewPaths = [
    path.join(__dirname, '..', 'dist'),
    path.join(__dirname, 'component'),
    path.join(__dirname, 'page')
]

const application = new Application(require('./routes'))

application.run(process.env.PORT, () => { 
    debug(`Listening on port ${process.env.PORT}`)
})