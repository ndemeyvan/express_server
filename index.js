

// Requiring modules
const express = require("express");
const app = express();

// Home Response route
app.get("/", (req, res) => {
    res.send("Welcome to seven School  soutenance!");
  });

  // Server setup
app.listen(3000, () => {
    console.log(
  `Server listening on http://localhost:3000`);
  });