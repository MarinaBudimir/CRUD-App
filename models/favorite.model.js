const mongoose = require('mongoose');

const FavoriteSchema = mongoose.Schema(
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

const Favorite = mongoose.model("Favorite", FavoriteSchema);

module.exports = Favorite; 

