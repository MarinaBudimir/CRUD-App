const mongoose = require('mongoose');

const SubcategorySchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter subcategory name"],

        }, 
        categoryid: {
            type: String, 
            required: true
        }
    }, 
    { 
        timestamps: true
    }

); 

const Subcategory = mongoose.model("Subcategory", SubcategorySchema);

module.exports = Subcategory; 