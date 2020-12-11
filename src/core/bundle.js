const path = require('path')
const fs = require('fs')

var instance = null

class Bundle {

    constructor () {
        this._viewPaths = []
        this._rootPath = path.join(__dirname, '..')
    } 

    resolveView (template) {
        return path.join(this.viewPaths.find(viewPath => 
            fs.existsSync(path.join(viewPath, template))
        ), template)
    }

    set viewPaths (paths) {
        this._viewPaths = paths
    }

    get viewPaths () {
        return this._viewPaths
    }

    static instance () {
        if (instance === null) instance = new Bundle()
        return instance
    }
}

module.exports = { Bundle }