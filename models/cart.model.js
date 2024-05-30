const mongoose = require('mongoose');

const CartSchema = mongoose.Schema(
    {
        productid: {
            type: String,
            required: true,

        }, 
        userid: {
            type: String, 
            required: true,

        }
    },
    { 
        timestamps: true
    }

); 

const Cart = mongoose.model("Cart", CartSchema);

module.exports = Cart; 