'use strict';
var express = require('express')
var debug = require("debug")("app:server");
var app = express();
var routes = require('./route');
routes(app);

app.use(function (req, res, next) {
  debug(`Not Found "${req.originalUrl}"`);
  res.sendStatus(404).end();
});

module.exports = app