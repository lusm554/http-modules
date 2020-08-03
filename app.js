const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.json())

let products = require('./products.json');

app.get('/products', (req, res, next) => {
    next()
})

app.get('/products', (req, res) => {
    res.json(products)
})

app.post('/products', (req, res) => {
    const newProduct = { ...req.body, id: products.length+1}
    products = [...products, newProduct]
    res.json(newProduct)
})

app.delete('/products', (req, res) => {

})

app.put('/products', (req, res) => {
    
})

app.listen(3000)