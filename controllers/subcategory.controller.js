const Subcategory = require('../models/subcategory.model');


const getSubcategories = async (req,res) => {
    try{
        const subcategories = await Subcategory.find();
        res.status(200).json(subcategories);

    }
    catch(error){
        res.status(500).json({message: error.message});

    }
}; 

const getSubcategory = async (req,res) => {

    try {
        const { id } = req.params; 
        const subcategory = await Subcategory.findById(id);
        res.status(200).json(subcategory);
    }
    catch(error){
        res.status(500).json({message: error.message}); 

    }
}; 

const createSubcategory = async (req,res) => {

    try {
        
        const subcategory = await Subcategory.create(req.body);
        res.status(200).json(subcategory);
    }
    catch(error){
        res.status(500).json({message: error.message}); 

    }
    
}; 

const updateSubcategory = async (req,res) => {

    try{
        const {id} = req.params;
        const subcategory = await Subcategory.findByIdAndUpdate(id, req.body);

        if(!subcategory){
            return res.status(404).json({message: "Subcategory not found"});

        }
        
        const updatedSubcategory = await Subcategory.findById(id);
        res.status(200).json(updatedSubcategory);

    }
    catch(error){
        res.status(500).json({message: error.message}); 
    }
}; 

const deleteSubcategory = async(req,res) => {

    try{
        const{id} = req.params;

        const subcategory = await Subcategory.findByIdAndDelete(id);

        if(!subcategory) {
            return res.status(404).json({message: "Subcategory not found"});

        }
        res.status(200).json({message: "Subcategory deleted successfully"});


    }
    catch(error){
        res.status(500).json({message: error.message}); 


    }
}; 

module.exports = { 
    getSubcategories, 
    getSubcategory, 
    createSubcategory, 
    updateSubcategory, 
    deleteSubcategory
}; 

