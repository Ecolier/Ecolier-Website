import { Component } from "../core/component"

import jumbotronTemplate from './jumbotron.ejs'
import jumbotronPagerTemplate from './jumbotron-pager.ejs'

export class JumbotronPager extends Component {
    constructor (element) {
        super(element, jumbotronPagerTemplate, { 
            indicators: []
        })
        this.indicators = []
        this.linkedJumbotron = {}
    }

    select (id) {
        this.linkedJumbotron.select(id)
    }

    addIndicator (id) {
        this.indicators.push({ id: id })
        this.element.innerHTML = this.template({ 
            indicators: this.indicators
        })
    }

    clearIndicators () {
        this.indicators = []
        this.element.innerHTML = this.template({ indicators: [] })
    }
}

export class Jumbotron extends Component {
    constructor (element, pager) {
        super(element, jumbotronTemplate, { 
            previews: [] 
        })
        this.previews = []
        this.pager = pager
        this.pager.linkedJumbotron = this
    }

    clear () {
        this.previews = []
        this.element.innerHTML = this.template({ previews: [] })
        this.pager.clearIndicators()
    }

    push (preview) {
        const id = this.previews.length
        this.previews.push({ ...preview, id: id })
        this.element.innerHTML = this.template({ previews: this.previews })
        this.pager.addIndicator(id)
    }

    select (id) {
        this.previews.forEach(preview => {
            if (preview.selected === true) { preview.selected = false }
            if (preview.id === id) { preview.selected = true }
        })
        this.element.innerHTML = this.template({ previews: this.previews })
    }

    selected () {
        return this.previews.find(preview => preview.selected === true)
    }
}