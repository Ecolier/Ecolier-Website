const { BaseController } = require('./base')

class OrganizationController extends BaseController {
    constructor () {
        super({
            title: 'Ecolier - Organization'
        })
    }
 }

module.exports = { OrganizationController }