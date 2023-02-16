const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const { graphqlHTTP } = require('express-graphql')

const app = express()
dotenv.config({ path: './env/.env' })

const schema = require('./schema')
const root = require('./resolver')

mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Error connecting to MongoDB', err))

app.use(
    '/graphql',
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true,
    })
)

app.listen(4000, () => {
    console.log('Running a GraphQL API server at http://localhost:4000/graphql')
})
