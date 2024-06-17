const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema.js");

const root = require("./resolver.js");

const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  }),
);

app.listen(4000, () =>
  console.log("Express GraphQL Server läuft auf http://localhost:4000/graphql"),
);
