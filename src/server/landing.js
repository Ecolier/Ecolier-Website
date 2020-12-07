const axios = require('axios').default
const path = require('path')

const { BaseController } = require('./base')

class LandingController extends BaseController {
    constructor () {
        super({ 
            title: 'Ecolier'
        })
        this.addMiddleware(this.fetchData.bind(this))
    }

    async fetchData (req, res, next) {      
        const [featured, article] = await Promise.all([
            axios.get(`${process.env.SERVER}/${this.data.locale}/featured`), 
            axios.get(`${process.env.SERVER}/${this.data.locale}/article/ecolier`)])
        this.data = { ...this.data, featured: featured.data, article: article.data }
        return next()
    }
}

module.exports = { LandingController }