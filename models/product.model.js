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
        image: {
            type: String,
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