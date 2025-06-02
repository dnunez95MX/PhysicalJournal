const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const weightSchema = new Schema({
  weight: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Weight", weightSchema);
