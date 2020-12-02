const { Controller } = require('./controller')

class LanguageController extends Controller {
    constructor () {
        super()
        
        this.router.get('/', (req, res) => {
            return res.redirect(`/${req.acceptsLanguages()[0].split('-')[0]}`)
        })
    }
}

module.exports = { LanguageController }