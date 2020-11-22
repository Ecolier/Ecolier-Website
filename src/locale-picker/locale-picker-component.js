const LocalePicker = function (element, locales) {
    this.rootElement = element
    this.locales = []
    this.onLocaleChanged = locale => { }
    this.localeList = document.createElement('ul')
    this.localeList.classList.add('locale-dropdown')
    this.rootElement.appendChild(this.localeList)
    locales.forEach(locale => this.push(locale));
    this.setSelected(locales.find(locale => locale.selected === true).code)
    this.selectedLocale = ''

    document.addEventListener('click', (event) => {
        const selectedItem = this.locales.find(locale => locale.selected === true)
        if (event.target !== selectedItem.element) {
            this.rootElement.classList.remove('active')
        }
    })
}

LocalePicker.prototype.push = function (locale) {
    const element = document.createElement('li')
    element.classList.add('locale-item')
    element.innerHTML = locale.name
    this.locales.push({ ...locale, element})
    this.localeList.appendChild(element)
    element.onclick = event => this.setSelected(locale.code)
}

LocalePicker.prototype.remove = function (code) {
    const localeItem = this.locales.find(locale => locale.code === code)
    this.locales = this.locales.filter(locale => locale.code !== code)
    localeItem.element.remove()
}

LocalePicker.prototype.setSelected = function (code) {

    this.selectedLocale = code
    
    const oldLocaleItem = this.locales.find(locale => locale.selected === true)
    const newLocaleItem = this.locales.find(locale => locale.code === code)

    newLocaleItem.selected = true
    newLocaleItem.element.remove()
    const newElement = document.createElement('span')
    newElement.onclick = event => {
        this.rootElement.classList.add('active')
    }
    newElement.innerHTML = newLocaleItem.name
    newElement.classList.add('locale-selected')
    newLocaleItem.element = newElement
    this.rootElement.prepend(newElement)

    if (newLocaleItem !== oldLocaleItem) {
        oldLocaleItem.selected = false
        oldLocaleItem.element.remove()
        const oldElement = document.createElement('li')
        oldElement.innerHTML = oldLocaleItem.name
        oldElement.classList.add('locale-item')
        oldElement.onclick = event => {
            this.setSelected(oldLocaleItem.code)
            this.onLocaleChanged(oldLocaleItem)
        }
        oldLocaleItem.element = oldElement
        this.localeList.appendChild(oldElement)
    }

    this.rootElement.dispatchEvent(new CustomEvent('locale-select', { 
        detail: { locale: newLocaleItem }
    }))
    
}

export { LocalePicker }