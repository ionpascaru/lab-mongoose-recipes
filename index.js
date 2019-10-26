const mongoose = require("mongoose");
const Recipe = require("./models/Recipe"); // Import of the model Recipe from './models/Recipe'
const data = require("./data.js"); // Import of the data from './data.js'

// Connection to the database "recipeApp"
mongoose
  .connect("mongodb://localhost/recipeApp", { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to Mongo!");
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

Recipe.remove()
  .then(result => {
    console.log(result);
    return Recipe.create({
      title: "Napoleon Cake",
      level: "Amateur Chef",
      ingredients: "Sugar",
      cuisine: "French",
      dishType: "Dessert",
      duration: 180,
      creator: "Napoleon"
    }) 
  
  })
  .then(recipe => {
    console.log("New recipe created: ", recipe.title);
  })
  .catch(err => {
    console.log("An error happened:", err);
  });
  

