const Dropdown = function (dropdown, trigger) {
    this.dropdown = dropdown
    this.trigger = trigger
    this.init()
}

Dropdown.prototype.init = function () {
    this.trigger.onclick = event => {
        this.trigger.classList.add('active')
        this.dropdown.classList.add('active')
        event.stopImmediatePropagation()
    }
    document.addEventListener('click', event => {
        if (event.target !== this.dropdown) {
            this.dropdown.classList.remove('active')
            this.trigger.classList.remove('active')
        }
    })
}

export { Dropdown }