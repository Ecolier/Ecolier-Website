import config from '../config.json'

export class ArticleService {
    request(name, locale) {
        return new Promise((resolve, reject) => {
            const articleRequest = new XMLHttpRequest()
    
            articleRequest.open('GET', `${config.server}/${locale}/article/${name}`, true)
            articleRequest.send()
        
            articleRequest.onreadystatechange = (event) => {
                if (articleRequest.readyState == 4 && articleRequest.status == 200) {
                    resolve(JSON.parse(articleRequest.responseText)[0])
                }
            }
        })
    }
}