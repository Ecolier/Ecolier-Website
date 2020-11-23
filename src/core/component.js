import ejs from 'ejs'

export class Component {
    constructor(element, template, data) {
        this.element = element
        this.data = data

        if (template) {
            this.template = ejs.compile(template)
            this.render()
        }
    }

    render () {
        this.element.innerHTML = this.template(this.data)
    }
}