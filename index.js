

// Requiring modules
const express = require("express");
const app = express();

// Home Response route
app.get("/", (req, res) => {
    res.send("Welcome to the home page v5!");
  });

  // Server setup
app.listen(80, () => {
    console.log(
  `Server listening on http://localhost:3000`);
  });