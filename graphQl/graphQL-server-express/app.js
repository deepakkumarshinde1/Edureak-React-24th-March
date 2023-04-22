// create a server
// import express from 'express';

const express = require("express");
const graphqlHTTPService = require("express-graphql");
const cors = require("cors");
const schema = require("./schema");
const app = express();
const PORT = 4444;

app.use(cors());
app.use(
  "/graphql",
  graphqlHTTPService({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, function () {
  console.log("server started at port ", PORT);
});
