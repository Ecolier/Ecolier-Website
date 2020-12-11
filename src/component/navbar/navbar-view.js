const { View } = require('../../core/view')
const { DropdownView } = require('../dropdown/dropdown-view')

class NavbarView extends View {
    constructor (data) {
        super('navbar/navbar.ejs', data)

        this.menuDropdown = new DropdownView()
        this.menuDropdown.properties.id = 'dropdown-menu'
        this.menuDropdown.properties.trigger = 'dropdown-menu-trigger'

        this.localeDropdown = new DropdownView()
        this.localeDropdown.properties.id = 'locale-picker'
        this.localeDropdown.properties.trigger = 'locale-picker-trigger'

        this.addSubview('menuDropdown', this.menuDropdown)
        this.addSubview('localeDropdown', this.localeDropdown)
    }
}

module.exports = { NavbarView }