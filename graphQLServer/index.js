// const express = require("express");
// const { ApolloServer } = require("apollo-server-express");
// const graphqlHTTP = require("express-graphql").graphqlHTTP;
// const { expressMiddleware } = require("@apollo/server/express4");
// const schema = require("./schema.js");
// const cors = require("cors");
// const http = require("http");
// const {
//   ApolloServerPluginDrainHttpServer,
// } = require("@apollo/server/plugin/drainHttpServer");

// const resolver = require("./resolver.js");
// async function startServer() {
//   const app = express();

//   const httpServer = http.createServer(app);

//   const server = new ApolloServer({
//     schema,
//     resolver,
//     plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
//   });

//   await server.start();

//   app.use(
//     "/graphql",
//     cors({
//       origin: ["http://localhost:4200", "https://studio.apollographql.com"],
//     }),
//     express.json(),
//     expressMiddleware(server),
//   );

//   await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));

//   console.log(`🚀 Server ready at http://localhost:4000/graphql`);

//   // const app = express();

//   // // const corsOptions = {
//   // //   origin: "http://localhost:4200",
//   // //   credentials: true,
//   // //   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   // //   optionsSuccessStatus: 204,
//   // // };

//   // app.use(
//   //   cors({
//   //     origin: ["http://localhost", "https://studio.apollographql.com"],
//   //     credentials: true,
//   //     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   //   }),
//   // );

//   // app.use(
//   //   "/graphql",
//   //   graphqlHTTP({
//   //     schema: schema,
//   //     rootValue: resolver,
//   //     graphiql: true,
//   //   }),
//   // );

//   // app.listen(4000, () =>
//   //   console.log(
//   //     "Express GraphQL Server läuft auf http://localhost:4000/graphql",
//   //   ),
//   // );
// }

// startServer();

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
    schema: schema, // point to your schema
    rootValue: resolver, // point to your resolver
    graphiql: true,
  }),
);

app.listen(4000, () =>
  console.log("Express GraphQL Server läuft auf http://localhost:4000/graphql"),
);
