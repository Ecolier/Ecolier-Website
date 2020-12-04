import { Dropdown } from '../dropdown/dropdown-component'
import { Component } from '../../core/component'

export class MenuComponent extends Component {
    constructor (element) {
        super(element)

        this.dropdown = new Dropdown(
            document.getElementById('menu'),
            document.getElementById('menu-dropdown-trigger')
        )
    }
}