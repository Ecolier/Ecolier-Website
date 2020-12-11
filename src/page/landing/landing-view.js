const { BaseView } = require('../../base/base-view')

class LandingView extends BaseView {
    constructor () {
        super('landing.ejs', {
            title: 'Ecolier'
        })
        this.navbar.data.theme = 'light'
        this.navbar.data.brand = 'Ecolier'
    }
}

module.exports = { LandingView }