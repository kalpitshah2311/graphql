# Guide

## Week 1

### 1. Install REST Dependency & Run the Server

- Create/Copy ```.env``` file from ```.env.example```
- Add the ```MONGO_URI``` to the environment variable
- Install the necessary dependancy and run the server

```
cd week-1/rest && npm install
```

#### 1.1 REST API Routes with Body

> **1.1.1 Create Books Collection**

route: ```localhost:5000/books/```

method: ```post```

body:
```json
{
  "title": "Book 1",
  "author": "Author 1",
  "price": 200
}
```

> **1.1.2 Get All Book Collection**

route: ```localhost:5000/books/```

method: ```get```

> **1.1.3 Get Book Collection by ID**

route: ```localhost:5000/books/:id```

method: ```get```

> **1.1.4 Update Collection by ID**

route: ```localhost:5000/books/:id```

method: ```put```

body:
```json
{
  "title": "Book 1 Updated",
  "author": "Author 1 Updated",
  "price": 300
}
```

> **1.1.5 Delete Collection by ID**

route: ```localhost:5000/books/:id```

method: ```delete```

### 2. Install GraphQL Dependency & Run the Server

- Create/Copy ```.env``` file from ```.env.example```
- Add the ```MONGO_URI``` to the environment variable
- Install the necessary dependancy and run the server

```
cd week-1/graphql && npm install
```

#### 2.1 Queries & Mutations

``` graphql
# Get a book by ID
query {
  book(id: "63ee5984e7f6774355cd35c1") {
    id
    title
    author
    price
  }
}

# Get all books
query {
  books {
    id
    title
    author
    price
  }
}

# Create a new book
mutation {
  createBook(title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 9.99) {
    id
    title
    author
    price
  }
}

# Update an existing book
mutation {
  updateBook(id: "63ee5984e7f6774355cd35c1", price: 11.99) {
    id
    title
    author
    price
  }
}

# Delete a book
mutation {
  deleteBook(id: "123") {
    id
    title
    author
    price
  }
}
```
