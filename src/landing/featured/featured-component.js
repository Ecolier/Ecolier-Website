import { Component } from '../../core/component'
import { Jumbotron, JumbotronPager } from '../../common/jumbotron/jumbotron-component'

export class FeaturedComponent extends Component {
    constructor(element) {
        super(element)
        this.jumbotron = new Jumbotron(document.getElementById('featured-jumbotron'))
        this.pager = new JumbotronPager(this.jumbotron, 
            document.getElementById('featured-pager'))
    }
}
