const { LocalizedView } = require('../language/language-view')
const { FooterView } = require('../component/footer/footer-view')
const { NavbarView } = require('../component/navbar/navbar-view')

class BaseView extends LocalizedView {
    constructor (template, data) {
        super(template, data)  

        this.navbar = new NavbarView({
            products: this.data.products,
            translations: this.data.translations,
            locale: this.data.locale
        })

        this.footer = new FooterView({
            products: this.data.products,
            translations: this.data.translations
        })

        this.addSubview('navbar', this.navbar)
        this.addSubview('footer', this.footer)
    }
}

module.exports = { BaseView }