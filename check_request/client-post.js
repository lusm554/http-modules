const http = require('http')
const prettyJson = require('./prettyJson')

const args = process.argv.slice(2)

/**
 * Params from npm command.
 * @param {string} - name - name of the product. 
 */
const someData = JSON.stringify({
    name: args[0] || 'someName'
})

const options = {
    hostname: '127.0.0.1',
    port: 3000,
    path: '/products',
    method: 'POST',
    headers: {
        'Content-type': 'application/json',
        'Content-Length': someData.length
    }
}

const request = http.request(options, (res) => {
    let body = '';
    res.on('data', (chunk) => { body+= '' + chunk })
    res.on('end', () => { console.log('respons', prettyJson(body)) })
    res.on('close', () => console.log('connection close') )
})

request.end(someData)