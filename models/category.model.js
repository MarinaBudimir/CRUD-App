const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter category name"],

        },
        imgSrc: {
            type: [String],
            required: true
        },
    },
    { 
        timestamps: true
    }

); 

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category; 