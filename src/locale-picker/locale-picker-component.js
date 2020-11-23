import { Component } from '../core/component'
import template from './locale-picker.ejs'

export class LocalePicker extends Component  {
    constructor (element, locales) {
        super(element, template, {
            locales: locales
        })

        this.didSelectLocale = (code) => { }

        document.addEventListener('click', (event) => {
            const selectedItem = this.data.locales.find(locale => locale.selected === true)
            if (event.target !== selectedItem.element) {
                this.element.classList.remove('active')
            }
        })
    }

    push (locale) {
        this.data.locales.push(locale)
        this.render()
    }

    getLocaleItem (code) { return this.element.querySelector(`[aria-lang="${code}"]`) }
    getSelectedLocale () { return this.data.locales.find(locale => locale.selected) }
    findLocale (code) { return this.data.locales.find(locale => locale.code === code) }
    
    remove (code) {
        this.locales = this.data.locales.filter(locale => locale.code !== code)
        this.getLocaleItem(code).remove()
    }
    
    setSelected (code) {
        this.getSelectedLocale().selected = false
        this.findLocale(code).selected = true
        this.render()
        this.didSelectLocale(code)
    }
}