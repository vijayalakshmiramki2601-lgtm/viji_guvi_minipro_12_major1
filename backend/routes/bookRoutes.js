const express = require("express");
const router = express.Router();
const Book = require("../models/Book");

/* ✅ GET ALL BOOKS */
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;