const { BaseController } = require('../../base/base-controller')
const axios = require('axios').default
const mailer = require('nodemailer')

const key = require(process.cwd() + '/' + process.env.KEY_JSON)

class DeveloperController extends BaseController { 
    constructor () {
        super({
            title: 'Evan - Developer'
        })

        this.addMiddleware(
            this.sendMail.bind(this),
            this.getDeveloper.bind(this)
        )
    }

    async sendMail (req, res, next) {
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

    async getDeveloper(req, res, next) {
        const developer = await axios.get(`${process.env.SERVER}/${this.data.locale}/developer`)
        this.data.developer = developer.data
        return next()
    }
}

module.exports = { DeveloperController }