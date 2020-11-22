import { Component } from '../core/component'

import { Navbar } from '../navbar/navbar-component'
import { Article } from '../article/article-component'
import { Featured } from '../featured/featured-component'
import { Footer } from '../footer/footer'

import template from './application.ejs'

export class Application extends Component {
    constructor(element) {
        super(element, template)
        this.navbar = new Navbar(document.getElementById('navbar'))
        this.featured = new Featured(document.getElementById('featured'))
        this.article = new Article(document.getElementById('article'))
        this.footer = new Footer(document.getElementById('footer'))
    }
}