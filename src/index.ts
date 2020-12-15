const debug = require('debug')('ecolier')
import * as path from 'path'
import { Application } from './core/application'

const environment = process.env.NODE_ENV ?? 'development'
if (environment === 'development') { require('dotenv').config({ path: '.env.dev' }) }
if (environment === 'production')  { require('dotenv').config({ path: '.env.prod' }) }

const application = new Application(require('./routes'), {
    viewPaths: [
        path.join(__dirname, '..', 'public'),
        path.join(__dirname, 'component'),
        path.join(__dirname, 'page')
    ], 
    staticPath: path.join(__dirname, '..', 'public')
})

application.run(parseInt(process.env.PORT ?? '8080'), () => { 
    debug(`Listening on port ${process.env.PORT}`)
})