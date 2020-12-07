const { BaseController } = require('./base')

class DeveloperController extends BaseController { 
    constructor () {
        super({
            title: 'Evan - Developer'
        })
    }
}

module.exports = { DeveloperController }