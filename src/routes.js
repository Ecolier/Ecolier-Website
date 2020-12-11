const { LandingController } = require('./page/landing/landing-controller')
const { LanguageController } = require('./language/language-controller')
const { ProductController } = require('./page/product/product-controller')
const { DeveloperController } = require('./page/developer/developer-controller')
const { OrganizationController } = require('./page/organization/organization-controller')

module.exports = 
[
    { 
        path: '/', 
        method: 'get', 
        controller: LanguageController
    },
    {
        path: '/:locale?', 
        template: 'landing.ejs', 
        method: 'get', 
        controller: LandingController, 
    },
    { 
        path: '/:locale?/product/:product', 
        template: 'product.ejs', 
        method: 'get', 
        controller: ProductController
    },
    {
        path: '/:locale?/developer', 
        method: 'get', 
        template: 'developer.ejs', 
        controller: DeveloperController
    },
    {
        path: '/:locale?/developer', 
        method: 'post', 
        template: 'developer.ejs', 
        controller: DeveloperController
    },
    {
        path: '/:locale?/organization', 
        method: 'get', 
        template: 'organization.ejs', 
        controller: OrganizationController
    }
]