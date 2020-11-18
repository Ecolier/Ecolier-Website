const http = require('http')
const url = require('url')
const fs = require('fs')
const path = require('path')

const basePath = './public'
const defaultFile = './public/index.html'

http.createServer(function (req, res) {

    const parsedUrl = url.parse(req.url)

    var pathname = basePath
    var ext = ''

    if (parsedUrl.pathname === '/') {
        pathname += '/index.html'
        ext = '.html'
    } else {
        pathname += parsedUrl.pathname
        ext = path.parse(pathname).ext
    }

    const map = {
        '.ico': 'image/x-icon',
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.json': 'application/json',
        '.css': 'text/css',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.wav': 'audio/wav',
        '.mp3': 'audio/mpeg',
        '.svg': 'image/svg+xml',
        '.pdf': 'application/pdf',
        '.doc': 'application/msword'
    }
    
    fs.stat(pathname, err => {

        if (err) {
            
            fs.stat(defaultFile, err => {
                fs.readFile(defaultFile, (err, data) => {
                    res.setHeader('Content-type', 'text/html' )
                    res.end(data)
                })
            })

            return
        }
        
        if (fs.statSync(pathname).isDirectory()) pathname += '/index' + ext
        
        fs.readFile(pathname, (err, data) => {
            if (err) {
                res.statusCode = 500
                res.end(`Error getting the file: ${err}.`)
            } else {
                res.setHeader('Content-type', map[ext] || 'text/plain' )
                res.end(data)
            }
        })
    })
    
    
}).listen(8080)