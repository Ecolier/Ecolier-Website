import { LocalePicker } from '../components/locale-picker'
import { Dropdown } from '../components/dropdown'

const LocaleController = function () {
    
    this.dropdown = new Dropdown(
        document.getElementById('navbar-dropdown'),
        document.getElementById('navbar-dropdown-trigger')
    )

    this.localePicker = new LocalePicker(
        document.getElementById('locale-picker'), [
            { code: 'fr', name: 'Français' },
            { code: 'en', name: 'English', selected: true  },
            { code: 'de', name: 'Deutsch' },
        ]
    )

    this.init()
}

LocaleController.prototype.init = function () {
    const defaultLanguage = navigator.language.split('-')[0]
    this.localePicker.setSelected(defaultLanguage)
}

export { LocaleController }