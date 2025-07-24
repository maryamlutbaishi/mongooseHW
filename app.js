const mongoose=require('mongoose')
const recipe= require('./models/Recipe')
async function connectToDB() {
    try{
        await mongoose.connect('mongodb+srv://maryamLutabishi:Maryam213@cluster0.fu1yrqr.mongodb.net/recipesDB?retryWrites=true&w=majority&appName=Cluster0')
        console.log('conected to data base')
    }
    catch(error){
        console.log('error:issue connecting to data base')
    }
}
connectToDB()
async function addRecipes() {

    const newRecipe = {
 name: "Um Ali",
 ingredients: ["Puff Pastry","Milk"],
 instructions: "bake at 180C",
 prepTime: 120,
 difficulty: "Medium"
}
try{
const addedRecipe=await recipe.create(newRecipe)
console.log(addedRecipe)
}
catch{
    console.log('error:',error)
}
}
addRecipes()