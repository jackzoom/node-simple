'use strict';
var express = require("express");
var router = express.Router();
var controllerInfo = require('../controller/info')

router.get("/about", controllerInfo.about);
module.exports = router;
