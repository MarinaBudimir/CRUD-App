const mongoose = require('mongoose');

const ArticleSchema = mongoose.Schema(
    {
        ID: {
            type: Number,
        },
        url:{
            type: String,
        },
        title: {
            type: String,
            required: true, 

        },
       
        description1: {
            type: String,
            required: false, 

        },
        description2: {
            type: String,
            required: false, 

        },
       
        description3: {
            type: String,
            required: false, 

        },
        description4: {
            type: String,
            required: false, 

        },
       
        description5: {
            type: String,
            required: false, 

        },
        description6: {
            type: String,
            required: false, 

        },
       
        imgSrc1: {
            type: [String],
            required: false,

        },imgSrc2: {
            type: [String],
            required: false, 

        },
       
        imgSrc3: {
            type: [String],
            required: false,

        }




    
        
    },
    { 
        timestamps: true
    }

); 

const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article; 