const mongoose = require("mongoose")
const recipeSchema=new mongoose.Schema({
     name: {
        type:String,
        required:true,
        unique:true
    },
    ingredients: [String], //array of strings
    instructions: String,
    prepTime: Number,
    difficulty:{
        type:String,
        
    }
})

const recipe=mongoose.model("recipe",recipeSchema)
module.exports= recipe