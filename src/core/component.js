import ejs from 'ejs'

export class Component {
    constructor(element, template, data) {
        this.element = element
        if (template) {
            this.template = ejs.compile(template)
            this.element.innerHTML = this.template(data)
        }
    }
}