import { LocalePicker } from '../locale-picker/locale-picker-component'
import { Dropdown } from '../dropdown/dropdown-component'
import { Component } from '../../core/component'

export class I18nComponent extends Component {
    constructor (element) {
        super(element)

        this.dropdown = new Dropdown(
            document.getElementById('navbar-menu'),
            document.getElementById('navbar-dropdown-trigger')
        )
        
        this.localePicker = new LocalePicker(
            document.getElementById('navbar-menu')
        )

        this.localePicker.didSelectLocale = locale => {
            const components = window.location.pathname.split('/')
            components[1] = locale
            window.location.replace(components.join('/'))
        }
    }
}