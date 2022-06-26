

// Requiring modules
const express = require("express");
const app = express();
const port = 8080

// Home Response route
app.get("/", (req, res) => {
    res.send("Hello test v7");
  });


app.listen(port, () => {
    console.log(
  `Server listening on http://localhost:${port}`);
  });