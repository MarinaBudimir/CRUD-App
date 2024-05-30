const express = require('express');
const Cart = require('../models/cart.model.js');
const router = express.Router(); 
const {getCarts, getCart, createCart, updateCart, deleteCart} = require('../controllers/cart.controller.js');




router.get('/', getCarts);

router.get("/:id", getCart);

router.post("/", createCart); 

router.put("/:id", updateCart); 

router.delete("/:id", deleteCart); 


module.exports = router; 