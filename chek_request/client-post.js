const http = require('http')

const someData = JSON.stringify({name: 'apple'})

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
    res.on('end', () => { console.log('respons', body) })
    res.on('close', () => console.log('close') )
})

request.end(someData)