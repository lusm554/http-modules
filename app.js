const fs = require('fs')
const path = require('path')

const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.json())

let products = require('./products.json');

app.get('/products', (req, res) => {
    res.json(products)
})

// Add product to json file
app.post('/products', (req, res, next) => {
    let products = require('./products.json');

    let product = {name: req.body.name, id: products.length + 1};

    products.push(product);


    fs.writeFileSync(path.join(__dirname, 'products.json'), JSON.stringify(products, null, 2))

    res.json(product)
})

app.delete('/products', (req, res) => {

})

app.put('/products', (req, res) => {
    
})

app.listen(3000)