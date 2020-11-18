const Jumbotron = function (element, pager) {
    this.rootElement = element
    this.pager = pager
    this.size = 0
    this.init()
}

Jumbotron.prototype.init = function () {
    this.previewList = document.createElement('ul')
    this.rootElement.appendChild(this.previewList)
    this.pager.linkedJumbotron = this
}

Jumbotron.prototype.clear = function () {
    while(this.previewList.firstChild){
        this.previewList.removeChild(this.previewList.firstChild);
    }
    this.pager.clearIndicators()
    this.size = 0
}

Jumbotron.prototype.push = function (preview) {

    const previewItem = document.createElement('li')
    const previewTitle = document.createElement('h1')
    const previewSubtitle = document.createElement('h2')
    const previewContent = document.createElement('p')
    const previewButton = document.createElement('a')
    
    previewTitle.innerHTML = preview.title
    previewSubtitle.innerHTML = preview.subtitle
    previewContent.innerHTML = preview.content
    
    previewButton.innerHTML = 'Learn More'
    previewButton.href = '/khari'
    previewButton.className = 'button'
    
    previewItem.setAttribute('aria-id', this.size)
    
    if (this.size == 0) {
        previewItem.className = 'active'
    }
    
    previewItem.append(previewTitle)
    previewItem.append(previewSubtitle)
    previewItem.append(previewContent)
    previewItem.append(previewButton)
    
    this.previewList.append(previewItem)

    if (this.pager !== 'undefined') {
        this.pager.addIndicator()
    }

    this.size += 1
}

const JumbotronPager = function (element) {
    this.rootElement = element
    this.size = 0
    this.init()
}

JumbotronPager.prototype.init = function () {
    this.indicatorList = document.createElement('ul')
    this.rootElement.appendChild(this.indicatorList)
    this.linkedJumbotron = { }
}

JumbotronPager.prototype.clearIndicators = function () {
    while(this.indicatorList.firstChild ) {
        this.indicatorList.removeChild(this.indicatorList.firstChild);
    }
    this.size = 0
}

JumbotronPager.prototype.addIndicator = function () {
    const indicatorItem = document.createElement('li')
    indicatorItem.className = 'pager-indicator'
    indicatorItem.setAttribute('aria-target', this.size)

    if (this.size == 0) {
        indicatorItem.classList.add('active')
    }

    this.size += 1
    
    if (this.linkedJumbotron !== 'undefined') {
        indicatorItem.onclick = (event) => {
            Array.from(this.indicatorList.getElementsByTagName('li')).forEach((indicator) => {
                indicator.classList.remove('active')
            })

            event.target.classList.add('active')

            Array.from(this.linkedJumbotron.previewList.getElementsByTagName('li')).forEach((previewItem) => {
                previewItem.className = ''
                if (event.target.getAttribute('aria-target') == previewItem.getAttribute('aria-id')) {
                    previewItem.className = 'active'
                }
            })
        }
    }
    
    this.indicatorList.appendChild(indicatorItem)
}

export { Jumbotron, JumbotronPager }