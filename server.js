const path = require("path");
const express = require("express");

const app = express();

const publicDirectory = path.join(__dirname, "/public");

app.use(express.static(publicDirectory));

// app.get("", (req, res) => {
//   res.send("Home page");
// });

// app.get("/help", (req, res) => {
//   res.send("Help page");
// });

// app.get("/about", (req, res) => {
//   res.send("About page");
// });

app.get("/weather", (req, res) => {
  res.send("Your weather");
});

app.listen(3000, () => {
  console.log("server is running in port 3000");
});
