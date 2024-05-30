const express = require('express');
const Subcategory = require('../models/subcategory.model.js');
const router = express.Router(); 
const { getSubcategories, getSubcategory, createSubcategory, updateSubcategory, deleteSubcategory } = require('../controllers/subcategory.controller.js');




router.get('/', getSubcategories);

router.get("/:id", getSubcategory);

router.post("/", createSubcategory); 

router.put("/:id", updateSubcategory); 

router.delete("/:id", deleteSubcategory); 

module.exports = router; 