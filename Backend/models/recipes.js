const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  calories: {
    type: Number,
    required: true,
  },
  //   ingredients: {
  //     type: Array,
  //     required: true,
  //   },
});

module.exports = mongoose.model("Recipe", recipeSchema);
