const { buildSchema } = require('graphql')

const schema = buildSchema(`
  type Query {
    book(id: ID!): Book
    books: [Book]
  }

  type Mutation {
    createBook(title: String!, author: String!, price: Float!): Book
    updateBook(id: ID!, title: String, author: String, price: Float): Book
    deleteBook(id: ID!): Book
  }

  type Book {
    id: ID!
    title: String!
    author: String!
    price: Float!
  }
`)

module.exports = schema
