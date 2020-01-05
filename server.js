const path = require("path");
const express = require("express");

const app = express();

// Define paths for express configs
const publicDirectory = path.join(__dirname, "/public");
const viewsPath = path.join(__dirname, "/template");

//Setup handlebars and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather Forecaster",
    name: "Amit Ghosh"
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/help", (req, res) => {
  res.render("help", {
    helpText: "This is some helpful text"
  });
});

//Setup static directory for serve
app.use(express.static(publicDirectory));

app.get("/weather", (req, res) => {
  res.send("Your weather");
});

app.listen(3000, () => {
  console.log("server is running in port 3000");
});
