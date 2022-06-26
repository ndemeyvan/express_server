

// Requiring modules
const express = require("express");
const app = express();

// Home Response route
app.get("/", (req, res) => {
    res.send("Hello test");
  });

  // Server setup
app.listen(80, () => {
    console.log(
  `Server listening on http://localhost:3000`);
  });