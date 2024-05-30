const Favorite = require('../models/favorite.model');



const getFavorites = async (req,res) => {
    try{
        const favorites = await Favorite.find();
        res.status(200).json(favorites);

    }
    catch(error){
        res.status(500).json({message: error.message});

    }
}; 

const getFavorite = async (req,res) => {

    try {
        const { id } = req.params; 
        const favorite = await Favorite.findById(id);
        res.status(200).json(favorite);
    }
    catch(error){
        res.status(500).json({message: error.message}); 

    }
}; 

const createFavorite = async (req,res) => {

    try {
        
        const favorite = await Favorite.create(req.body);
        res.status(200).json(favorite);
    }
    catch(error){
        res.status(500).json({message: error.message}); 

    }
    
}; 



const updateFavorite = async (req,res) => {

    try{
        const {id} = req.params;
        const favorite = await Favorite.findByIdAndUpdate(id, req.body);

        if(!favorite){
            return res.status(404).json({message: "Favorite not found"});

        }
        
        const updatedFavorite = await Favorite.findById(id);
        res.status(200).json(updatedFavorite);

    }
    catch(error){
        res.status(500).json({message: error.message}); 
    }
}; 

const deleteFavorite = async(req,res) => {

    try{
        const{id} = req.params;

        const favorite = await Favorite.findByIdAndDelete(id);

        if(!favorite) {
            return res.status(404).json({message: "Favorite not found"});

        }
        res.status(200).json({message: "Favorite deleted successfully"});


    }
    catch(error){
        res.status(500).json({message: error.message}); 


    }
}; 

module.exports = { 
    getFavorites, 
    getFavorite,  
    createFavorite,
    updateFavorite, 
    deleteFavorite
}; 
