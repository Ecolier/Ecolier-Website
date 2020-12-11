const { View } = require('../../core/view')

class DropdownView extends View {
    constructor (data) {
        super('dropdown/dropdown.ejs', data)
        this.data.title = ''
        this.data.items = []
    }

    addItem (item) {
        this.data.items.push(item)
    }
}

module.exports = { DropdownView }