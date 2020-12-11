const { BaseController } = require('../../base/base-controller')

class OrganizationController extends BaseController {
    constructor () {
        super({
            title: 'Ecolier - Organization'
        })
    }
 }

module.exports = { OrganizationController }