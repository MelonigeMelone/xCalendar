const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type Query {
    user(name: String!): xCalendarUser
  }

  type Mutation {
    createUser(id: String!, email: String!, name: String!, password: String!,phoneNumber: String!): xCalendarUser
  }

  type xCalendarUser {
    id: String
    email: String
    name: String
    password: String
    phoneNumber: String
  }
`);

module.exports = schema;
