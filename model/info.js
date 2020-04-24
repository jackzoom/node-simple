'use strict';
const properties = require('../package.json')
var info = {
    about: () => properties
};
module.exports = info;