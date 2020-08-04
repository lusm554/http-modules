const http = require('http')
const prettyJson = require('./prettyJson')

const args = process.argv.slice(2)

/**
 * Params from npm command.
 * @param {number} id - id of the product.
 */
const someData = {
    id: +args[0] || 1
}

const justJsonData = JSON.stringify(someData)

const options = {
    hostname: '127.0.0.1',
    port: 3000,
    path: `/products/${someData.id}`,
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': justJsonData.length
    }
}

const request = http.request(options, (res) => {
    let body = ''
    res.on('data', (chunk) => { body+= chunk })
    res.on('end', () => { console.log('respons', prettyJson(body)) })
    res.on('close', () => { console.log('connection close') })
})

request.end(justJsonData)