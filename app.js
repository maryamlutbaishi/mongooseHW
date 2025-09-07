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
catch(error){
    console.log('error:',error)
}
}
addRecipes()

async function getAllRecipe(){

    const foundRecipe = await recipe.findById("68808ca0cdbe361d0d78239b")
    console.log(foundRecipe)
}

getAllRecipe()


async function updateRecipe(){

    const updatedRecipe = await recipe.findByIdAndUpdate("68808ca0cdbe361d0d78239b",{
  name: 'um Ali2'
},{new:true})

    console.log(updatedRecipe)
}


updateRecipe()



async function deleteRecipe(){
    try{
    const deletedRecipe = await recipe.findByIdAndDelete("68808ca0cdbe361d0d78239b")
    console.log("Recipe Successfully Deleted")
    }
    catch(error){
        console.log("Error Deleting", error)
    }
    
}



deleteRecipe()

