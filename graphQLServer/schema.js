const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type Query {
    user(id: String!): xCalendarUser
  }

  type Mutation {
    createUser(id: String!, email: String!, name: String!, password: String!): xCalendarUser
  }

  type xCalendarUser {
    id: String
    email: String
    name: String
    password: String
  }
`);

module.exports = schema;
