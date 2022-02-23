

// Requiring modules
const express = require("express");
const app = express();

// Home Response route
app.get("/", (req, res) => {
    res.send("Hello Seven Devs Maxime Ndeme!");
  });

  // Server setup
app.listen(3000, () => {
    console.log(
  `Server listening on http://localhost:3000`);
  });