const router = require("express").Router();
const path = require("path");
const fs = require("fs");
const IMAGE_DATA = path.join(__dirname, "../data/images.json");
const TEAM_DATA = path.join(__dirname, "../data/team.json");

router.get("/v1/images", function (req, res, next) {
  fs.readFile(IMAGE_DATA, function (err, data) {
    if (err) process.exit(1);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json(JSON.parse(data));
  });
});

router.get("/v1/team", function (req, res, next) {
  fs.readFile(TEAM_DATA, function (err, data) {
    if (err) process.exit(1);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json(JSON.parse(data));
  });
});

module.exports = router;
