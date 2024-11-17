const express = require('express')
const { products, productsbyid } = require('../Controllers/productcontroller')
const router = express.Router()

router.get('/products',products)
router.get("/products/:id", productsbyid);

module.exports = router; 	