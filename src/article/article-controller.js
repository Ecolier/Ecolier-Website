import { Article } from '../components/article'

const ArticleController = function () {
    this.article = new Article(document.getElementById('article'))
}

ArticleController.prototype.request = function(server, name, locale) {
    const articleRequest = new XMLHttpRequest()
    
    articleRequest.open('GET', `${server}/${locale}/article/${name}`, true)
    articleRequest.send()

    articleRequest.onreadystatechange = (event) => {
        if (articleRequest.readyState == 4 && articleRequest.status == 200) {
            this.article.set(JSON.parse(articleRequest.responseText)[0])
        }
    }
}

export { ArticleController }