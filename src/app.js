const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./routes");

// Create express instnace
const app = express();

//Middleware
app.use(cors());
app.use(bodyParser.json());

// Use the router
app.use("/", router);

module.exports = app;
