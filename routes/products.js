const express = require('express');
const router = express.Router();

const Products = require('../models/products.model');

router.get('/', (req, res ) => {
    Products.fetchPizzasData()
    .then(([rows, fieldData]) => {
        res.json(rows)
    
    })
    .catch(err => console.log(err))
});


/** Will ADD More Field */
module.exports = router;