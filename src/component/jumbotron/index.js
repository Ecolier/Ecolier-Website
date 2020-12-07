import { Component } from '../component'

export class Jumbotron extends Component {
    constructor (element) {
        super(element)

        this.selectedId = 0
        this.previews = Array.from(element.querySelectorAll('[data-preview]'))
        this.pager = this.element.querySelector(`[data-pager]`)
        this.indicators = Array.from(this.pager.querySelectorAll('[data-indicator]'))
        this.indicators.forEach(indicator => {
            indicator.addEventListener('click', event => {
                this.select(parseInt(indicator.getAttribute('data-indicator')))
            })
        })

        this.previewActiveClassName = 'preview--active'
        this.indicatorActiveClassName = 'indicator--active'

        this.previews.forEach(preview => {

            var startX = 0, 
                startY = 0, 
                deltaX = 0, 
                deltaY = 0

            preview.addEventListener('touchstart', event => {
                startX = event.pageX
                startY = event.pageY
                deltaX = 0, deltaY = 0
            })

            preview.addEventListener('touchmove', event => {
                deltaX = startX - event.pageX
                deltaY = startY - event.pageY
                if (deltaX > 50 || deltaX < -50) {
                    event.preventDefault()
                }
            })

            preview.addEventListener('touchend', event => {
                if (deltaX > 50 || deltaX < -50) {
                    if (deltaX < 0) {
                        const next = this.selectedId - 1
                        this.previewExists(next) ? this.select(next) : this.select(this.lastPreview())
                    } else {
                        const next = this.selectedId + 1
                        this.previewExists(next) ? this.select(next) : this.select(0)
                    }
                }
            })
        })
    }

    lastPreview () {
        return parseInt(this.previews[this.previews.length - 1].getAttribute('data-preview'))
    }

    previewExists (id) {
        return this.previews.find(preview => 
            parseInt(preview.getAttribute('data-preview')) === id
        )
    }

    select (id) {

        this.selectedId = id
        this.selectedPreview().classList.remove(this.previewActiveClassName)
        this.selectedIndicator().classList.remove(this.indicatorActiveClassName)

        this.previews.find(preview => 
            parseInt(preview.getAttribute('data-preview')) === id
        ).classList.add(this.previewActiveClassName)

        this.indicators.find(indicator => 
            parseInt(indicator.getAttribute('data-indicator')) === id
        ).classList.add(this.indicatorActiveClassName)
    } 

    selectedPreview () {
        return this.previews.find(elem => 
            elem.classList.contains(this.previewActiveClassName)
        )
    }

    selectedIndicator () {
        return this.indicators.find(elem => 
            elem.classList.contains(this.indicatorActiveClassName)
        )
    }
    
}