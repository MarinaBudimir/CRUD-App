const express = require('express');
const Favorite = require('../models/favorite.model.js');
const router = express.Router(); 
const {getFavorites, getFavorite, createFavorite, updateFavorite, deleteFavorite} = require('../controllers/favorite.controller.js');




router.get('/', getFavorites);

router.get("/:id", getFavorite);

router.post("/", createFavorite); 

router.put("/:id", updateFavorite); 

router.delete("/:id", deleteFavorite); 


module.exports = router; 