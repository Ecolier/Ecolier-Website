import config from '../config.json'

export class FeaturedService {
    request(locale) {
        return new Promise((resolve, reject) => {
            const featuredRequest = new XMLHttpRequest()
            
            featuredRequest.open('GET', `${config.server}/${locale}/featured`, true)
            featuredRequest.send()
            
            featuredRequest.onreadystatechange = event => {   
                if (featuredRequest.readyState == 4 && featuredRequest.status == 200) {
                    resolve(JSON.parse(featuredRequest.responseText))
                }
            }
        })
    }
}