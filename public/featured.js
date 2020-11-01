const server = 'http://localhost:5001'

const featuredRequest = new XMLHttpRequest()

featuredRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

        const featuredResponse = JSON.parse(this.responseText)
        const featuredJumbotron = document.getElementById('featured')

        featuredResponse.forEach((featured) => {
            
            const featuredElement = document.createElement('li')
            const featuredTitle = document.createElement('h1')
            const featuredSubtitle = document.createElement('h2')
            const featuredContent = document.createElement('p')
    
            featuredTitle.innerHTML = featured.title
            featuredSubtitle.innerHTML = featured.subtitle
            featuredContent.innerHTML = featured.content
    
            featuredElement.append(featuredTitle)
            featuredElement.append(featuredSubtitle)
            featuredElement.append(featuredContent)

            featuredJumbotron.append(featuredElement)

        })

    }
}

featuredRequest.open('GET', `${server}/featured`, true)
featuredRequest.send()