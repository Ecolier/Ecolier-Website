const { LandingController } = require('./landing')
const { LanguageController } = require('./language')
const { ProductController } = require('./product')
const { DeveloperController } = require('./developer')
const { OrganizationController } = require('./organization')

module.exports = 
[
    { 
        path: '/', 
        method: 'get', 
        controller: new LanguageController()
    },
    {
        path: '/:locale?', 
        template: 'landing.ejs', 
        method: 'get', 
        controller: new LandingController(), 
    },
    { 
        path: '/:locale?/product/:product', 
        template: 'product.ejs', 
        method: 'get', 
        controller: new ProductController() 
    },
    {
        path: '/:locale?/developer', 
        method: 'get', 
        template: 'developer.ejs', 
        controller: new DeveloperController()
    },
    {
        path: '/:locale?/developer', 
        method: 'post', 
        template: 'developer.ejs', 
        controller: new DeveloperController()
    },
    {
        path: '/:locale?/organization', 
        method: 'get', 
        template: 'organization.ejs', 
        controller: new OrganizationController()
    }
]