const mongoose = require('mongoose');

const CartSchema = mongoose.Schema(
    {
        productid: {
            type: String,
            required: false,

        }, 
        userid: {
            type: String, 
            required: false,

        }, 
        name: {
            type: String, 
            required: true,

        },
        imgSrc: {
            type: [String],
            required: true,
        },
        price: {
            type: Number,
            required: true,
            default:0

        },
        size: {
            type: String,
            required: true,

        },
        quantity: {
            type: Number,
            required: true,
            default:0, 

        },


    },
    { 
        timestamps: true
    }

); 

const Cart = mongoose.model("Cart", CartSchema);

module.exports = Cart; 