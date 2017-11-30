var gulp = require('gulp');
var config = require('../gulp.config.js')();

module.exports = function(){
    gulp.start(['watch-scss','watch-svg']);
};

