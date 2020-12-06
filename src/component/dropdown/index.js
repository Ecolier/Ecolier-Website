import { Component } from "../component"
import './dropdown.scss'

export class Dropdown extends Component{
    constructor (element) {
        super(element)

        this.triggerActiveClassName = 'dropdown-trigger--active'
        this.dropdownActiveClassName = 'dropdown--active'
        this.active = false

        this.trigger = document.getElementById(this.element.getAttribute('data-trigger'))
        this.menuTriggers = Array.from(this.element.querySelectorAll('[data-menu]'))
        this.menus = []

        this.menuTriggers.forEach(menuTrigger => {
            const menu = document.getElementById(menuTrigger.getAttribute('data-menu'))
            menuTrigger.addEventListener('click', event => {
                Array.from(this.element.children)
                    .filter(child => child !== menu)
                    .forEach(child => { 
                        child.classList.remove('display--block')
                        child.classList.add('display--none') 
                    })
                menu.classList.remove('display--none')
                menu.classList.add('display--block')
            }, false)

            menu.querySelector('[data-back]').addEventListener('click', event => {
                Array.from(this.element.children)
                    .filter(child => child !== menu)
                    .forEach(child => { 
                        child.classList.remove('display--none') 
                        child.classList.add('display--block') 
                    })
                menu.classList.remove('display--block')
                menu.classList.add('display--none')
            }, false)

            this.menus.push(menu)
        })

        document.addEventListener("click", event => {
            event.target.closest(`#${this.trigger.id}`) ? this.active = true : this.active = false
            if (this.active == false) {
                this.trigger.classList.remove(this.triggerActiveClassName)
                this.element.classList.remove(this.dropdownActiveClassName)
            }
        }, false);

        this.trigger.addEventListener("click", event => {
            this.trigger.classList.add(this.triggerActiveClassName)
            this.element.classList.add(this.dropdownActiveClassName)
            this.active = true
        }, false);

        this.element.addEventListener("click", event => {
            event.stopPropagation();
        }, false);
    }
}