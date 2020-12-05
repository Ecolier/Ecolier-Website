import { Dropdown } from '../common/dropdown/dropdown'
import { FeaturedComponent } from './featured/featured-component'
import './landing.scss'

new Dropdown(document.getElementById('dropdown-menu'))
new Dropdown(document.getElementById('locale-picker'))
new FeaturedComponent(document.getElementById('featured'))