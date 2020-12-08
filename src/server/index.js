const debug = require('debug')('ecolier')
const path = require('path')
const { Application } = require('./application')

const environment = process.env.NODE_ENV ?? 'development'
if (environment === 'development') { require('dotenv').config({ path: '.env.dev' }) }
if (environment === 'production')  { require('dotenv').config({ path: '.env.prod' }) }

const application = new Application(require('./routes'), {
    views: [
        path.join(__dirname, '..', '..', 'dist'),
        path.join(__dirname, '..', 'common'),
        path.join(__dirname, '..', 'component'),
        path.join(__dirname, '..', 'page')
    ]
})

application.run(process.env.PORT, () => { 
    debug(`Listening on port ${process.env.PORT}`)
})