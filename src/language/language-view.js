const { View } = require('../core/view.js')

class LocalizedView extends View {
    constructor (template, data) {
        super(template, {
            ...data,
            locale: '',
            translations: {},
            availableLocales: []
        })
    }
}

module.exports = { LocalizedView }