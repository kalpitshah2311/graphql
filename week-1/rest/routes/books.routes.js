const express = require('express')
const router = express.Router()
const Book = require('../models/Book.model')

// Get all books
router.get('/', (req, res) => {
    Book.find()
        .then((books) => res.json(books))
        .catch((err) => res.status(500).json({ error: err }))
})

// Get a book by ID
router.get('/:id', (req, res) => {
    Book.findById(req.params.id)
        .then((book) => res.json(book))
        .catch((err) => res.status(500).json({ error: err }))
})

// Create a new book
router.post('/', (req, res) => {
    const book = new Book(req.body)
    book.save()
        .then((book) => res.json(book))
        .catch((err) => res.status(500).json({ error: err }))
})

// Update an existing book
router.put('/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((book) => res.json(book))
        .catch((err) => res.status(500).json({ error: err }))
})

// Delete a book
router.delete('/:id', (req, res) => {
    Book.findByIdAndRemove(req.params.id)
        .then((book) => res.json(book))
        .catch((err) => res.status(500).json({ error: err }))
})

module.exports = router
