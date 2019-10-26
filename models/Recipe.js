const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: { type: String, unique: true, required: true }, // title. Type String. It should be required and unique.
  level: {
    type: String,
    enum: ["Easy Peasy", "Amateur Chef", "UltraPro Chef"]
  }, // level. Type String. Only can be one of the following values: Easy Peasy - Amateur Chef - UltraPro Chef (remember the ENUM wink)
  ingredients: Array, // ingredients. Type Array.
  cuisine: { type: String, required: true }, // cuisine. Type String. Should be required.
  dishType: {
    type: String,
    enum: ["Breakfast", "Dish", "Snack", "Drink", "Dessert", "Other"]
  }, // dishType. Type String. Possible values: Breakfast - Dish - Snack - Drink - Dessert - Other.
  image: {
    type: String,
    default: "https://images.media-allrecipes.com/images/75131.jpg"
  }, // image. Type String. Default value: https://images.media-allrecipes.com/images/75131.jpg.
  duration: { type: Number, min: "0" }, // duration. Type Number. Min value should be 0.
  creator: String, // creator. Type String
  created: { type: Date, default: Date.now } // created. Type Date. By default today.
  // TODO: write the schema
});

const Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;

/* mongoose.model("Recipe", {
  title: { type: String, unique: true, required: true }, // title. Type String. It should be required and unique.
  level: {
    type: String,
    enum: ["Easy Peasy", "Amateur Chef", "UltraPro Chef"]
  }, // level. Type String. Only can be one of the following values: Easy Peasy - Amateur Chef - UltraPro Chef (remember the ENUM wink)
  ingredients: Array, // ingredients. Type Array.
  cuisine: { type: String, required: true }, // cuisine. Type String. Should be required.
  dishType: {
    type: String,
    enum: ["Breakfast", "Dish", "Snack", "Drink", "Dessert", "Other"]
  }, // dishType. Type String. Possible values: Breakfast - Dish - Snack - Drink - Dessert - Other.
  image: {
    type: String,
    default: "https://images.media-allrecipes.com/images/75131.jpg"
  }, // image. Type String. Default value: https://images.media-allrecipes.com/images/75131.jpg.
  duration: { type: Number, min: "0" }, // duration. Type Number. Min value should be 0.
  creator: String, // creator. Type String
  created: { type: Date, default: Date.now } // created. Type Date. By default today.
}); */
