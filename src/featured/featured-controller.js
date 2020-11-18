import { Jumbotron, JumbotronPager } from '../components/jumbotron'

const FeaturedController = function () {
    this.jumbotron = new Jumbotron(
        document.getElementById('featured-jumbotron'),
        new JumbotronPager(
            document.getElementById('featured-pager')
        )
    )
}

FeaturedController.prototype.request = function (server, locale) {
    this.jumbotron.clear() 
    const featuredRequest = new XMLHttpRequest()
    
    featuredRequest.open('GET', `${server}/${locale}/featured`, true)
    featuredRequest.send()

    featuredRequest.onreadystatechange = event => {   
        if (featuredRequest.readyState == 4 && featuredRequest.status == 200) {
            JSON.parse(featuredRequest.responseText).forEach(preview => {
                this.jumbotron.push(preview)
            })
        }
    }
}

export { FeaturedController }