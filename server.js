const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

// Define paths for express configs
const publicDirectory = path.join(__dirname, "/public");
const viewsPath = path.join(__dirname, "/template/views");
const partialsPath = path.join(__dirname, "/template/partials");

//Setup handlebars and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);

//setup partials
hbs.registerPartials(partialsPath);

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather Forecaster",
    name: "Amit Ghosh"
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "Amit Ghosh"
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    helpText: "This is some helpful text",
    name: "Amit Ghosh"
  });
});

//Setup static directory for serve
app.use(express.static(publicDirectory));

app.get("/weather", (req, res) => {
  res.send("Your weather");
});

app.get("/help/*", (req, res) => {
  res.render("error", {
    title: 404,
    errorMessage: "Help article not found.",
    name: "Amit Ghosh"
  });
});

app.get("*", (req, res) => {
  res.render("error", {
    title: 404,
    errorMessage: "Page not found.",
    name: "Amit Ghosh"
  });
});

app.listen(3000, () => {
  console.log("server is running in port 3000");
});
