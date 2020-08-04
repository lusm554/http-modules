const http = require('http')
const prettyJson = require('./prettyJson')

http.get({ path:'/products', hostname: 'localhost', port: 3000 }, (res) => {
    let body = ''
    res.on('data', (chunk) => { body+= chunk })
    res.on('end', () => { console.log('received data', prettyJson(body)) })
    res.on('close', () => { console.log('connection close') })
})