// routes for server
import express from 'express';

//file with hidden variables liek API keys, etc.
import dotenv from 'dotenv';

// import product data
import products from './data/products.js';

dotenv.config();

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

const PORT = process.env.PORT || 5000

// listen for server
app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));