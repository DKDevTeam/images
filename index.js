require("dotenv").config();
const express = require("express");
const app = express();
const ApiRoute = require("./src/routes/api");
const homeRoute = require("./src/routes/home");

app.use("/api", ApiRoute);
app.use(homeRoute);

// Static Files
app.use(express.static("src/public"));
app.use(express.static("src/assets"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/backgrounds", express.static(__dirname + "assets/backgrounds"));

// Set Views
app.set("views", "./views");
app.set("view engine", "ejs");

app.listen(process.env.PORT, () =>
  console.info("Server is up and running! On port " + process.env.PORT)
);
