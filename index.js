const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')

const Article = require('./models/article.model.js'); 
const articleRoute = require('./routes/article.route.js'); 

const Product = require('./models/product.model.js'); 
const productRoute = require('./routes/product.route.js'); 


const Category = require('./models/category.model.js'); 
const categoryRoute = require('./routes/category.route.js'); 

const User = require('./models/user.model.js'); 
const userRoute = require('./routes/user.route.js'); 

const Blog = require('./models/blog.model.js'); 
const blogRoute = require('./routes/blog.route.js'); 

const Cart = require('./models/cart.model.js'); 
const cartRoute = require('./routes/cart.route.js'); 

const Favorite = require('./models/favorite.model.js'); 
const favoriteRoute = require('./routes/favorite.route.js'); 


const Subcategory = require('./models/subcategory.model.js'); 
const subcategoryRoute = require('./routes/subcategory.route.js'); 



// how to retrieve data from database with multiple entities which using api requests in react project


const app = express(); 
app.use(cors()) // Use this after the variable declaration

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false})); 

//routes
app.use('/api/products', productRoute);
app.use('/api/categories', categoryRoute);
app.use('/api/users', userRoute);
app.use('/api/blogs', blogRoute);
app.use('/api/carts', cartRoute);
app.use('/api/favorites', favoriteRoute);
app.use('/api/subcategories', subcategoryRoute);
app.use('/api/articles', articleRoute);


app.get("/",(req,res)=>{
    res.send("Hello from Node API"); 

});


mongoose.connect("mongodb+srv://mbudim01:Solin0302mb@backenddb.tomlfjg.mongodb.net/NODEAPI?retryWrites=true&w=majority&appName=BackendDB")
.then(()=> {
    console.log("Connected to database!");
    app.listen(3001, ()=> {
        console.log('Server is running on port 3001')
    })
})
.catch(() => { 
    console.log("Not connected!"); 
})

