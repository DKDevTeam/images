const router = require("express").Router();
const path = require("path");
const fs = require("fs");
const IMAGE_DATA = path.join(__dirname, "../data/images.json");

router.get("/images", function (req, res, next) {
  fs.readFile(IMAGE_DATA, function (err, data) {
    if (err) process.exit(1);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json(JSON.parse(data));
  });
});

module.exports = router;
