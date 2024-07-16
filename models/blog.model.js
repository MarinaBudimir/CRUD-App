const mongoose = require('mongoose');

const BlogSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true, 

        },
       
        description: {
            type: String,
            required: true,

        }, 
        imgSrc: {
            type: [String],
            required:false, 
        }
        
    },
    { 
        timestamps: true
    }

); 

const Blog = mongoose.model("Blog", BlogSchema);

module.exports = Blog; 