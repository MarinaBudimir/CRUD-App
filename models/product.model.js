const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter product name"],

        },
        price: {
            type: Number,
            required: true,
            default:0

        },
        imgSrc1: {
            type: [String], 
            required: true, 
        },
        imgSrc2: {
            type: [String], 
            required: false, 
        },
        imgSrc3: {
            type: [String], 
            required: false, 
        },
        imgSrc4: {
            type: [String], 
            required: false, 
        },
        imgSrc5: {
            type: [String], 
            required: false, 
        },
        imgSrc6: {
            type: [String], 
            required: false, 
        },


        

        description: {
            type: String,
            required: true, 

        },
        subcategoryid: {
            type: String,
            required: true,
        },
        size: {
            type: String,
            required: true,

        },
        quantity: {
            type: Number,
            required: true,
            default:0

        }
    },
    { 
        timestamps: true
    }

); 

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product; 