import { I18n, I18nProvider } from '../i18n/i18n-provider'
import { ArticleService } from './article-service'
import template from './article.ejs'

export class Article extends I18n {
    constructor(element) {
        super(element, template)
        this.translationCallback = this.getTranslations
        this.applyTranslations()
    }

    getTranslations (locale) {
        return new Promise((resolve, reject) => {
            new ArticleService().request('ecolier', locale).then(article => {
                resolve({
                    'article.title': article.title,
                    'article.content': article.content
                })
            })
        })
    }
}
