const express = require("express");
const app = express();
app.set("port", process.env.PORT || 5000);
const imageRouter = require("./routes/_api");
const config = require("../config.json");

app.use("/api", imageRouter);

app.get("/image", function (req, res) {
  res.redirect(config.site_name);
});

app.use(express.static("src/public"));

app.listen(app.get("port"), function () {
  console.log("Node app is running on port", app.get("port"));
});
