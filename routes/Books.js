const express = require("express");
const booksModel = require("../models/books");
const booksRouter = express.Router();
// Import the booksModel schema
// Import your user role verification middleware

// GET all books
booksRouter.get("/", async (req, res) => {
  try {
    const books = await booksModel.find();
    res.json({ msg: "All Books", data: books });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

booksRouter.post("/", async (req, res) => {
  try {
    const newbooksModel = new booksModel(req.body);
    const savedbooksModel = await newbooksModel.save();
    res.status(201).json({ msg: "Books Added", data: savedbooksModel });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// If You want to add an array of Books

booksRouter.post("/bulk", async (req, res) => {
  try {
    let booksToAdd = req.body;

    // If the input is a single book, convert it to an array for uniform processing
    if (!Array.isArray(booksToAdd)) {
      booksToAdd = [booksToAdd];
    }

    // Save all books in the array
    const savedBooks = await Promise.all(
      booksToAdd.map(async (book) => {
        const newBooksModel = new booksModel(book);
        return await newBooksModel.save();
      })
    );

    res.status(201).json({ msg: "Books Added", data: savedBooks });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server error" });
  }
});

// GET a specific book by ID
booksRouter.get("/:id", async (req, res) => {
  try {
    const book = await booksModel.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "book not found" });
    }
    res.json({ msg: "Requested Book", data: book });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server error" });
  }
});

// PATCH/update a specific book by ID
booksRouter.patch("/:id", async (req, res) => {
  try {
    const updatedbooksModel = await booksModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedbooksModel) {
      return res.status(404).json({ message: "book not found" });
    }
    res.json({ msg: "Book Updated", data: updatedbooksModel });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server error" });
  }
});

// PUT/replace a specific books by ID
booksRouter.put("/:id", async (req, res) => {
  try {
    const updatedbooksModel = await booksModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedbooksModel) {
      return res.status(404).json({ message: "book not found" });
    }
    res.json({ msg: "Book Updated", data: updatedbooksModel });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server error" });
  }
});

// DELETE a specific book by ID
booksRouter.delete("/:id", async (req, res) => {
  try {
    const deletedbooksModel = await booksModel.findByIdAndDelete(req.params.id);
    if (!deletedbooksModel) {
      return res.status(404).json({ message: "book not found" });
    }
    res.json({ message: "Book deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server error" });
  }
});

module.exports = booksRouter;
