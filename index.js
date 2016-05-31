'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var pp = require('preprocess');



module.exports = function (options) {
    return through.obj(function (file, enc, cb) {
        // 主体实现忽略若干行

    });
};
