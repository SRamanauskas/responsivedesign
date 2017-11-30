var gulp = require('gulp');
var config = require('../gulp.config.js')();
var plumber = require('gulp-plumber');
var svg2png = require('gulp-svg2png');
var svgSprite = require('gulp-svg-sprite');

module.exports = function(){
    if(config.svg.pngFallback){
        gulp.start('png-sprite')
    } else {
        gulp.start('svg-sprite')
    }
};

var svgConfig = {
    shape: {
        spacing: {
            padding: 0
        }
    },
    mode: {
        css: {
            bust: false,
            dest : './',
            // layout: 'vertical', 'horizontal', 'diagonal'
            sprite : config.svg.spriteFolder + 'sprite.svg',
            render: {
                scss: {
                    dest: config.svg.scssMapFolder + '_svg-sprite-map.scss',
                    template: config.svg.scssMapFolder + '_svg-sprite-template.scss'
                }
            }
        }
    }
};

gulp.task('svg-sprite', function(){
    gulp.src(config.svg.sourceFolder + '*.svg')
        .pipe(plumber({
            errorHandler: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(svgSprite(svgConfig))
        .pipe(gulp.dest('./'));
});

gulp.task('png-sprite', ['svg-sprite'], function(){
    gulp.src( config.svg.spriteFolder + '*.svg')
        .pipe(plumber({
            errorHandler: function () {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(svg2png())
        .pipe(gulp.dest(config.svg.spriteFolder));
});




