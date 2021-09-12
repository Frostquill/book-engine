const { gql } = require('apollo-server-express');

const typeDefs = gql `
type User {
    _id: ID!
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]

}

type Book {
    _id: ID!
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
}

input addBook {
    description: String
    title: String
    bookId: String
    image: String
    link: String
    authors: [String]
}

type Query {
    me: User
    users: [User]
}

type Mutation {
    login(email: String!, password: String!): Auth
    createUser(username: String!, email: String!, password: String!): Auth
    addBook(input: addBook!): User
    deleteBook(bookId: ID!): User
}

 type Auth {
     token : ID!
     user: User
 }
`;


module.exports = typeDefs;