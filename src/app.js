const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("../schema/schema");

const app = express();
const router = () => {
  // redierct all request to graphql
//   app.use(function redirect(req, res) {
//     res.redirect("/graphql");
//   });
  // graphql end point
  app.use(
    "/graphql",
    graphqlHTTP({
      schema: schema,
      graphiql: true,
    })
  );
};

const startServer = () => {
  const port = process.env.API_PORT || 4200;
  app.listen(port, () => {
    console.log("|> Serve is up and running on ", port);
  });
};

// starting server
router();
startServer();
