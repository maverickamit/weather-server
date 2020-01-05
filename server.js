const path = require("path");
const express = require("express");

const app = express();

const publicDirectory = path.join(__dirname, "/public");

app.set("view engine", "hbs");

app.get("", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/help", (req, res) => {
  res.render("help");
});

app.use(express.static(publicDirectory));

app.get("/weather", (req, res) => {
  res.send("Your weather");
});

app.listen(3000, () => {
  console.log("server is running in port 3000");
});
