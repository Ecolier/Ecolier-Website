export class Component {
    constructor(element) {
        this.element = element

        this.refs = Array.from(this.element.querySelectorAll('[data-ref]')).reduce((map, elem) => {
            map[elem.getAttribute('data-ref')] = elem
            return map
        }, {})
    }
}