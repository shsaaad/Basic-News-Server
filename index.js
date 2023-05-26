const express = require("express");
const app = express();
const port = 5000;
var cors = require("cors");

const catagories = require("./data/catagories.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("News web is runnig");
});

app.get("/catagories", (req, res) => {
  res.send(catagories);
  console.log(catagories);
});

app.listen(port, () => {
  console.log(`New API website running in:  ${port}`);
});
