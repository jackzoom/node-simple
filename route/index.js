'use strict';
var routeInfo = require('./info');
var router = (app) => {
    app.use("/v1", routeInfo);
}
module.exports = router