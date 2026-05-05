const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  price: Number,
  rating: Number,
  overview: String,
  image: String,
  tagline: String
});

module.exports = mongoose.model("Book", bookSchema);