const express = require('express');
const Article  = require('../models/article.model.js');
const router = express.Router(); 
const {getArticles, getArticle, createArticle, deleteArticle, updateArticle} = require('../controllers/article.controller.js');



router.get('/', getArticles);

router.get("/:id", getArticle);

router.post("/", createArticle); 

router.put("/:id", updateArticle); 

router.delete("/:id", deleteArticle); 


module.exports = router; 