const axios = require('axios').default
const { LandingView } = require('./landing-view')
const { BaseController } = require('../../base/base-controller')

class LandingController extends BaseController {
    constructor () {
        super({
            featured: [],
            article: {}
        })

        this.view = new LandingView()
        this.addMiddleware(this.fetchData.bind(this))
    }

    async fetchData (req, res, next) {
    
        const [featured, article] = await Promise.all([
            axios.get(`${process.env.SERVER}/${this.data.locale}/featured`), 
            axios.get(`${process.env.SERVER}/${this.data.locale}/article/ecolier`)
        ])

        this.updateData({
            featured: featured.data,
            article: article.data
        })

        this.view.updateData({
            featured: this.data.featured,
            article: this.data.article
        })
        
        return next()
    }
}

module.exports = { LandingController }