import { Component } from "../core/component"

import jumbotronTemplate from './jumbotron.ejs'
import jumbotronPagerTemplate from './jumbotron-pager.ejs'

export class JumbotronPager extends Component {
    constructor (element) {
        super(element, jumbotronPagerTemplate, { 
            indicators: []
        })
        this.linkedJumbotron = {}
    }

    select (id) {
        this.linkedJumbotron.select(id)
        
    }

    addIndicator (id) {
        this.data.indicators.push({ id: id })
        this.render()
    }

    clearIndicators () {
        this.data.indicators = []
        this.render()
    }
}

export class Jumbotron extends Component {
    constructor (element, pager) {
        super(element, jumbotronTemplate, { 
            previews: [] 
        })
        this.pager = pager
        this.pager.linkedJumbotron = this
    }

    clear () {
        this.data.previews = []
        this.render()
        this.pager.clearIndicators()
    }

    push (preview) {
        const id = this.data.previews.length
        this.data.previews.push({ ...preview, id: id })
        this.render()
        this.pager.addIndicator(id)
    }

    select (id) {
        this.data.previews.forEach(preview => {
            if (preview.selected === true) { preview.selected = false }
            if (preview.id === id) { preview.selected = true }
        })
        this.pager.element.querySelectorAll(`[aria-target]`).forEach(e => {
            e.classList.remove('active')
        })
        this.pager.element.querySelector(`[aria-target="${id}"]`).classList.add('active')
        this.render()
    }

    selected () {
        return this.data.previews.find(preview => preview.selected === true)
    }
}