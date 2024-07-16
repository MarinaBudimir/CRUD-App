const Cart = require('../models/cart.model');
const Product = require('../models/product.model');



const getCarts = async (req,res) => {
    try{
        const carts = await Cart.find();
        res.status(200).json(carts);

    }
    catch(error){
        res.status(500).json({message: error.message});

    }
}; 

const getCart = async (req,res) => {

    try {
        const { id } = req.params; 
        const cart = await Cart.findById(id);
        res.status(200).json(cart);
    }
    catch(error){
        res.status(500).json({message: error.message}); 

    }
}; 

const createCart = async (req,res) => {

    try {
        const {name, quantity} = req.body;
        const product = await Product.findOne({name: name});

        const { _id, ...productWithoutId } = product.toObject();

        const productToSave = {...productWithoutId, quantity: quantity}    
        
        const cart = await Cart.create(productToSave);
        res.status(200).json('success');
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message}); 

    }
    
}; 



const updateCart = async (req,res) => {

    try{
        const {id} = req.params;
        const cart = await Cart.findByIdAndUpdate(id, req.body);

        if(!cart){
            return res.status(404).json({message: "Cart not found"});

        }
        
        const updatedCart = await Cart.findById(id);
        res.status(200).json(updatedCart);

    }
    catch(error){
        res.status(500).json({message: error.message}); 
    }
}; 

const deleteCart = async(req,res) => {

    try{
        const{id} = req.params;

        const cart = await Cart.findByIdAndDelete(id);

        if(!cart) {
            return res.status(404).json({message: "Cart not found"});

        }
        res.status(200).json({message: "Cart deleted successfully"});


    }
    catch(error){
        res.status(500).json({message: error.message}); 


    }
}; 

module.exports = { 
    getCarts, 
    getCart,  
    createCart,
    updateCart, 
    deleteCart
}; 
