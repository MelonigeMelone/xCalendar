const express = require(`express`);
const { graphqlHTTP } = require(`express-graphql`);
const cors = require(`cors`);
const app = express();

const schema = require("./schema.js");
const resolver = require("./resolver.js");

app.use(cors());
app.use(
  `/graphql`,
  graphqlHTTP({
    schema: schema,
    rootValue: resolver,
    graphiql: true,
  }),
);

app.listen(4000, () =>
  console.log("🚀 Server ready at http://localhost:4000/graphql"),
);
