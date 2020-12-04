const { Controller } = require('./controller')

class LanguageController extends Controller {
    constructor () {
        super()
    }

    render (req, res, next) {
        return res.redirect(`/${req.acceptsLanguages()[0].split('-')[0]}`)
    }
}

module.exports = { LanguageController }