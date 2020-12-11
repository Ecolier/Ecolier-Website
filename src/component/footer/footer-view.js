const { View } = require('../../core/view')

class FooterView extends View {
    constructor (data) {
        super('footer/footer.ejs', data)
    }
}

module.exports = { FooterView }