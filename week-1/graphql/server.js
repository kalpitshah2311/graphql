const express = require('express')
const mongoose = require('mongoose')
const { graphqlHTTP } = require('express-graphql')

const app = express()

const schema = require('./schema')
const root = require('./resolver')

mongoose
    .connect(
        'mongodb+srv://admin:admin@testcluster.8ubqaa3.mongodb.net/graphql',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
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
