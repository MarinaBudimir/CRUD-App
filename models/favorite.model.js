const mongoose = require('mongoose');

const FavoriteSchema = mongoose.Schema(
    {
        productid: {
            type: String,
            required: false, 
            // required: true,

        }, 
        userid: {
            type: String, 
            // required: true,
            required: false, 

        },
         name: {
            type: String,
            required: [true, "Please enter product name"],

        },
     
        imgSrc: {
            type: [String],
            required: true,

        },
        
        description: {
            type: String,
            required: false, 

        },
        subcategoryid: {
            type: String,
            required: false,
        },
        showHeart: {
            type: Boolean,
            required: true,
            default: true, // default value is false (not clicked)
    },
        
     
    
    },
    { 
        timestamps: true
    }

); 

const Favorite = mongoose.model("Favorite", FavoriteSchema);

module.exports = Favorite; 

