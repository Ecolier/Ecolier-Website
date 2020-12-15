import { BaseController } from '../../base/base-controller'
import * as express from 'express'
import axios from 'axios'
import { DeveloperView } from './developer-view'
const mailer = require('nodemailer')

const key = require(process.cwd() + '/' + process.env.KEY_JSON)

export class DeveloperController extends BaseController { 

    public view = new DeveloperView()
    public developer = {}

    constructor () {
        super()
        this.middlewares.push(
            this.sendMail.bind(this),
            this.getDeveloper.bind(this)
        )
    }

    async sendMail (req: express.Request, res: express.Response, next: express.NextFunction) {
        next()
        if (req.method === 'POST') {

            const address = req.body.address
            const message = req.body.message

            const transporter = mailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    type: 'OAuth2',
                    user: 'evan@khari.app',
                    serviceClient: key.client_id,
                    privateKey: key.private_key
                }
            })

            await transporter.verify()
            await transporter.sendMail({
                to: 'evan@khari.app',
                subject: `<${address}> - Ecolier`,
                text: message
            })

        }
    }

    async getDeveloper (req: express.Request, res: express.Response, next: express.NextFunction) {
        const developer = await axios.get(`${process.env.SERVER}/${this.locale}/developer`)
        this.developer = developer.data
        this.view.developer = this.developer
        return next()
    }
}