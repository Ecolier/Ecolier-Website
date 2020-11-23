const express = require('express')
const path = require('path')

const application = express()
application.use(express.static(path.join(__dirname, 'dist')))

application.get('*', (req, res, next) => {
    res.sendFile(__dirname + '/dist/index.html')
})

application.listen(8080, () => {
    console.log('application is running on port *:8080')
})