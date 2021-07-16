const router = require("express").Router();
const path = require("path");
const fs = require("fs");
const config = require("../data/image.data");
const IMAGE_DATA = path.join(__dirname, `${config.imagedata}`);

router.get("/", (req, res) => {
  res.send(200);
});

router.get("/backgrounds", function (req, res, next) {
  res.json(`{background_urls [${config.imagedata}]}`);
});

module.exports = router;
