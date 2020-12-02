import { Component } from '../../core/component'

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
            var startY = 0
            var deltaX = 0
            var deltaY = 0

            this.refs[indicatorTarget].addEventListener('touchstart', (event) => {
                startX = event.pageX
                startY = event.pageY
            })

            this.refs[indicatorTarget].addEventListener('touchmove', (event) => {
                deltaX = startX - event.pageX
                deltaY = startY - event.pageY
                console.log(deltaX)
                if (deltaY >= -10 && deltaY <= 10 &&
                    deltaX <= -10 && deltaX >= 10) {
                        console.log('hello')
                } 
            })

            this.refs[indicatorTarget].addEventListener('touchend', (event) => {
                startX = 0
                startY = 0
            })
        })
    }
}