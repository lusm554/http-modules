const http = require('http')

const someData = {name: 'Milk', id: 2}

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
    res.on('end', () => { console.log('respons', body) })
    res.on('close', () => { console.log('connection close') })
})

request.end(justJsonData)