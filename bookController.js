const Book = require("../models/Book");

// GET ALL
exports.getBooks = async (req, res) => {
  const books = await Book.find();
  res.json(books);
};

// GET ONE
exports.getBookById = async (req, res) => {
  const book = await Book.findById(req.params.id);
  res.json(book);
};

// CREATE
exports.createBook = async (req, res) => {
  const book = new Book(req.body);
  const saved = await book.save();
  res.json(saved);
};

// UPDATE
exports.updateBook = async (req, res) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(book);
};

// DELETE
exports.deleteBook = async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};