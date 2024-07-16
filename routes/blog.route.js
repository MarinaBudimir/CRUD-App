// const express = require('express');
// const Blog  = require('../models/blog.model.js');
// const router = express.Router(); 
// const {getBlogs, getBlog, createBlog, updateBlog, deleteBlog} = require('../controllers/blog.controller.js');


// router.get('/', getBlogs);

// router.get("/:id", getBlog);

// router.post("/", createBlog); 

// router.put("/:id", updateBlog); 

// router.delete("/:id", deleteBlog); 


// // NOVO VIDEO 
// const { getPaginatedBlogs } = require('../controllers/blogController');
// router.get('/blogs', getPaginatedBlogs);


// module.exports = router; 

const express = require('express');
const { getBlogs, getBlog, createBlog, updateBlog, deleteBlog, getPaginatedBlogs } = require('../controllers/blog.controller');
const router = express.Router(); 

// CRUD routes
router.get('/', getBlogs);
router.get("/:id", getBlog);
router.post("/", createBlog); 
router.put("/:id", updateBlog); 
router.delete("/:id", deleteBlog); 



module.exports = router;
