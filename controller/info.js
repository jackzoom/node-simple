'use strict';

var modelInfo = require('../model/info')
var { responseHandle } = require('../utils')

var info = {
    about: function (req, res) {
        var { name, version, author } = modelInfo.about();
        responseHandle(res, {
            name, version, author
        })
    }
};

module.exports = info;
