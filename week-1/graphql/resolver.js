const Book = require('./models/Book.model')

const root = {
    book: ({ id }) => Book.findById(id),
    books: () => Book.find(),
    createBook: ({ title, author, price }) =>
        Book.create({ title, author, price }),
    updateBook: ({ id, title, author, price }) =>
        Book.findByIdAndUpdate(id, { title, author, price }, { new: true }),
    deleteBook: ({ id }) => Book.findByIdAndDelete(id),
}

module.exports = root
