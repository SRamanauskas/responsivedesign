var gulp = require('gulp');
var config = require('../gulp.config.js')();
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var neat = require('node-neat').includePaths;
var bourbon = require('node-bourbon').includePaths;


module.exports = function() {
    var options = {
        includePaths: [neat, bourbon],
        outputStyle: 'nested', // 'compressed'
        sourceComments: false
    };
    
    return gulp.src(config.scss.src)
        .pipe(plumber({
            errorHandler: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(sourcemaps.init())
        .pipe(sass(options)
            .on('error', sass.logError)
        )
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.scss.cssFolder));
};


