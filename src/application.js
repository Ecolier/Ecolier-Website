import { LocaleController } from './i18n/locale-controller'
import { FeaturedController } from './featured/featured-controller'
import { ArticleController } from './article/article-controller'

const server = 'http://192.168.1.51:5001'

const localeController = new LocaleController()
localeController.localePicker.rootElement.addEventListener('locale-select', event => {
    featuredController.request(server, event.detail.locale.code)
    articleController.request(server, 'ecolier', event.detail.locale.code)
})

const featuredController = new FeaturedController()
featuredController.request(server, localeController.localePicker.selectedLocale)

const articleController = new ArticleController()
articleController.request(server, 'ecolier', localeController.localePicker.selectedLocale)
