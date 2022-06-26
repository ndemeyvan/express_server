

// Requiring modules
const express = require("express");
const app = express();

// Home Response route
app.get("/", (req, res) => {
    res.send("Hello test v6");
  });


app.listen(8080, () => {
    console.log(
  `Server listening on http://localhost:3000`);
  });