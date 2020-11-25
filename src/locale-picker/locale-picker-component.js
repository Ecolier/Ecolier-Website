import { Component } from '../core/component'

export class LocalePicker extends Component  {
    constructor (element, locales) {
        super(element)
        this.didSelectLocale = (code) => { }
        Object.keys(this.refs).forEach(key => {
            this.refs[key].onclick = () => this.didSelectLocale(key)
        })
    }
}