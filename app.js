const fs = require('fs')
const path = require('path')

const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.json())

let products = require('./products.json');

/**
 * Update products.json .
 * @param {array} products 
 */
function updateProducts(products) {
    fs.writeFileSync(path.join(__dirname, 'products.json'), JSON.stringify(products, null, 2))
}

app.get('/products', require('./middlewareAuth'), (req, res) => {
    const { page, pageSize } = req.query
    
    if(page &&  pageSize) {
        const start = (+page - 1) * pageSize
        const end = +start + pageSize
        res.json(products.slice(start, end))
    }
    else {
        res.json(products)
    }
})

app.post('/products', (req, res) => {
    let products = require('./products.json')

    let product = {name: req.body.name, id: products.length + 1}
    products.push(product)

    updateProducts(products)

    res.json(product)
})

app.delete('/products/:id', (req, res) => {
    let { id } = req.params

    let deletedProduct = products.find(p => p.id === Number(id))
    products = products.filter(p => p.id !== deletedProduct.id)

    updateProducts(products)

    res.json(deletedProduct)
})

app.put('/products', (req, res) => {
    let updatedProduct = req.body

    products = products.map(p => {
        return p.id === updatedProduct.id ? 
            {name: updatedProduct.name, id: updatedProduct.id} : p;
    })
    
    updateProducts(products)

    res.json(updatedProduct)
})

app.listen(3000)