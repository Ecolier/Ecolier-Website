import { Navbar } from '../navbar/navbar-component'
import { Featured } from '../featured/featured-component'
import { Footer } from '../footer/footer'

export class Application {
    constructor() {
        this.navbar = new Navbar(document.getElementById('navbar'))
        this.featured = new Featured(document.getElementById('featured'))
        this.footer = new Footer(document.getElementById('footer'))
    }
}