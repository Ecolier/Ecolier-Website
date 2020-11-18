const Article = function (element) {
    this.element = element
    this.init()
}

Article.prototype.init = function () {
    this.title = document.createElement('h1')
    this.content = document.createElement('p')
    this.element.appendChild(this.title)
    this.element.appendChild(this.content)
}

Article.prototype.set = function (article) {
    this.title.innerHTML = article.title
    this.content.innerHTML = article.content
}

export { Article }