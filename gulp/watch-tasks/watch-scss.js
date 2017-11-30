var gulp = require('gulp');
var config = require('../gulp.config.js')();

module.exports = function(){
    gulp.watch(config.scss.src, ['compile-scss']);
};

