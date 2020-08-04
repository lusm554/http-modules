const http = require('http')
const prettyJson = require('./prettyJson')

let options = {
    path:'/products', 
    hostname: 'localhost', 
    port: 3000 ,
    headers: {
        authorization: '123'
    }
}

http.get(options, (res) => {
    const { statusCode } = res;
    let body = '';

    res.on('data', (chunk) => { body+= chunk })
    res.on('end', () => { 
        if(statusCode !== 200) {
            return console.log({statusCode, body})
        }
        console.log('received data', prettyJson(body)) 
    })
    res.on('close', () => { console.log('connection close') })
})