import { I18nComponent } from '../common/i18n/i18n-component'
import { MenuComponent } from '../common/menu/menu'
import { FeaturedComponent } from './featured/featured-component'
import './landing.scss'

new I18nComponent(document.getElementById('navbar-dropdown'))
new FeaturedComponent(document.getElementById('featured'))
new MenuComponent(document.getElementById('menu-dropdown'))