const express = require('express')
const mongoose = require('mongoose')
const books = require('./routes/books.routes')
const bodyParser = require('body-parser')

const app = express()

mongoose
    .connect('mongodb+srv://admin:admin@testcluster.8ubqaa3.mongodb.net/rest', {
        useNewUrlParser: true,
    })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err))

app.use(express.json())
app.use(bodyParser.json())
app.use('/books', books)

app.listen(5000, () => console.log('Server started on port 5000'))
