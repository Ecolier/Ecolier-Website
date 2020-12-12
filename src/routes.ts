import { LandingController } from './page/landing/landing-controller'
import { LanguageController } from './language/language-controller'
import { ProductController } from './page/product/product-controller'
import { DeveloperController } from './page/developer/developer-controller'
import { OrganizationController } from './page/organization/organization-controller'

module.exports = 
[
    { 
        path: '/', 
        method: 'get', 
        controller: LanguageController
    },
    {
        path: '/:locale?', 
        method: 'get', 
        controller: LandingController, 
    },
    { 
        path: '/:locale?/product/:product', 
        method: 'get', 
        controller: ProductController
    },
    {
        path: '/:locale?/developer', 
        method: 'get',
        controller: DeveloperController
    },
    {
        path: '/:locale?/developer', 
        method: 'post', 
        controller: DeveloperController
    },
    {
        path: '/:locale?/organization', 
        method: 'get', 
        controller: OrganizationController
    }
]