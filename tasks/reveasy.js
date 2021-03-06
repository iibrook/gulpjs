var gulp = require('gulp');
var reveasy = require('gulp-rev-easy');
var dir = require('./directory.js');

var releaseDirectory = dir.currentDirectory + 'release/'

gulp.task("reveasy", function (argument) {
  return gulp.src(releaseDirectory+ '*.html')
        .pipe(reveasy({
            fileTypes:['js','css','img'],
            elementAttributes:{
                js: {
                    name: 'script',
                    src: 'src'
                },
                css: {
                    name: 'link[rel="stylesheet"]',
                    src: 'href'
                },
                img:{
                    name: 'img',
                    src : 'src'
                }
            }
        }))
        .pipe(gulp.dest(releaseDirectory))
});
