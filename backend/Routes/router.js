const express = require('express');
const router = express.Router();
const { getProducts, addProduct, deleteProduct } = require('../controllers/productcontroller');
const { signup, login } = require('../controllers/userController');

// Get all products
router.get('/', getProducts);

// Add a product
router.post('/', addProduct);

// Delete a product by ID
router.delete('/:id', deleteProduct);

//user controller
//signup
router.post('/signup',signup);
router.post('/login',login);

module.exports = router;
