// routes for server
const express = require("express");

// import product data
const products = require('./data/products')

// initialize express
const app = express();

// fetch products
app.get('/', (req, res) => {
    res.send('API is running...')
})

// fetch all product data and convert to json
app.get('/api/products', (req, res) => {
    res.json(products)
})

// fetch by single product by id
app.get('/api/products/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id)
    res.json(product)
})

// listen for server
app.listen(5000, console.log('Server running on port 5000'));