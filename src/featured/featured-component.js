import { Component } from '../core/component'
import { I18n } from '../i18n/i18n-provider'
import { Jumbotron, JumbotronPager } from '../jumbotron/jumbotron-component'
import { FeaturedService } from './featured-service'
import template from './featured.ejs'

export class Featured extends I18n {
    constructor(element) {
        super(element, template)
        this.jumbotron = new Jumbotron(
            document.getElementById('featured-jumbotron'),
            new JumbotronPager(document.getElementById('featured-pager'))
        )
        this.translationCallback = this.getTranslations.bind(this)
        this.applyTranslations()
    }

    getTranslations (locale) {
        return new Promise((resolve, reject) => {
            new FeaturedService().request(locale).then(previews => {

                previews.forEach((preview) => {
                    this.jumbotron.push(preview)
                })

                this.jumbotron.select(0)

                resolve(previews.map((preview, index) => {
                    return {
                        [`preview.${index}.title`]: preview.title,
                        [`preview.${index}.subtitle`]: preview.subtitle,
                        [`preview.${index}.content`]: preview.content
                    }
                }).reduce((acc, preview) => { return {...acc, ...preview} }))
            })
        })
    }
}
