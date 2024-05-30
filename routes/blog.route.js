const express = require('express');
const Blog  = require('../models/blog.model.js');
const router = express.Router(); 
const {getBlogs, getBlog, createBlog, updateBlog, deleteBlog} = require('../controllers/blog.controller.js');


router.get('/', getBlogs);

router.get("/:id", getBlog);

router.post("/", createBlog); 

router.put("/:id", updateBlog); 

router.delete("/:id", deleteBlog); 


module.exports = router; 
