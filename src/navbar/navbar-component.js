import { Component } from '../core/component'
import { I18nComponent } from '../i18n/i18n-component'

export class Navbar extends Component {
    constructor(element) {
        super(element)
        this.i18n = new I18nComponent(
            document.getElementById('navbar-dropdown')
        )
    }
}