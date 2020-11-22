import { Component } from '../core/component'

import { Navbar } from '../navbar/navbar-component'
import { Article } from '../article/article-component'
import { Featured } from '../featured/featured-component'

import template from './application.ejs'
import { I18nProvider } from '../i18n/i18n-provider'

export class Application extends Component {
    constructor(element) {
        super(element, template)
        
        this.navbar = new Navbar(document.getElementById('navbar'))
        this.featured = new Featured(document.getElementById('featured'))
        this.article = new Article(document.getElementById('article'))

        this.navbar.i18n.localePicker.onLocaleChanged = locale => {
            I18nProvider.getInstance().updateTranslations(locale.code)
        }
    }
}