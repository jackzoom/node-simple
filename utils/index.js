'use strict';
/**
 * 对象继承
 * @params {object} arg
 */
var extend = function () {
    var length = arguments.length;
    var target = arguments[0] || {};
    if (typeof target != "object" && typeof target != "function") {
        target = {};
    }
    if (length == 1) {
        target = this;
        i--;
    }
    for (var i = 1; i < length; i++) {
        var source = arguments[i];
        for (var key in source) {
            // 使用for in会遍历数组所有的可枚举属性，包括原型。
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                //过滤 undefined 未定义属性
                source.hasOwnProperty(key) && source[key] != undefined && (target[key] = source[key]);
            }
        }
    }
    return target;
}
/**
 * 响应通用方法
 * @params {function} res
 * @params {object} data 数据集
 * @params {string} msg 消息信息
 */
var responseHandle = function (res, data, msg) {
    var opts = {
        code: '0000',
        msg: 'success',
        data: null
    }
    var results = extend(opts, {
        data, msg
    });
    res.json(results)
}
module.exports = {
    extend,
    responseHandle
}