const { gql } = require('apollo-server-express');

const typeDefs = gql ` 
 type book{
    authors: [String]
    description : String
    bookID : String!
    image: String
    link: String
    title: String!
 }
 type User{
    _id: ID
    username: String!
    email: String!
    bookcount: Int
    savedbooks: [Book]
 }
 type Auth{
    token: ID!
    user :User
}
type Query {
    me : User
 }
 input SavedBookInput{
    authors :[String]
    description : String
    bookID : String
    image: String
    link: String
    title: String
 }
 type Mutation {
    login(email:String!, password: String!): Auth
    addUser(username: String!,email:String!,password:String!):Auth
    saveBook(input:SavedBookInput): User
    removeBook(bookId: String!): User
 }

`;

module.exports = typeDefs;