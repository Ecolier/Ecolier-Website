import { Component } from "../core/component"

export class JumbotronPager extends Component {
    constructor (jumbotron, element) {
        super(element)
        this.jumbotron = jumbotron
        Object.keys(this.refs).forEach(indicatorTarget => {
            this.refs[indicatorTarget].onclick = () => {
                Object.keys(this.jumbotron.refs).forEach(previewId => {
                    this.jumbotron.refs[previewId].classList.remove('active')
                    this.jumbotron.refs[indicatorTarget].classList.add('active')
                })
                Object.keys(this.refs).forEach(indicatorTarget => {
                    this.refs[indicatorTarget].classList.remove('active')
                })
                this.refs[indicatorTarget].classList.add('active')
            }
        })
    }
}

export class Jumbotron extends Component {
    constructor (element) {
        super(element)
        Object.keys(this.refs).forEach(indicatorTarget => {

            var startX = 0

            this.refs[indicatorTarget].addEventListener('touchstart', (event) => {
                startX = event.pageX
            })

            this.refs[indicatorTarget].addEventListener('touchmove', (event) => {
                console.log(startX - event.pageX)
            })

            this.refs[indicatorTarget].addEventListener('touchend', (event) => {
                startX = 0
            })
        })
    }
}