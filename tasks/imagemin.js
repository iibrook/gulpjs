var gulp = require('gulp');
var dir=require('./directory.js');

var imgDirectory=dir.imgDirectory;
var currentDirectory=dir.currentDirectory;
var releaseDirectory=dir.currentDirectory+'release/'+dir.imgName;
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
gulp.task('imagemin', function() {
  return gulp.src(imgDirectory+'/*')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{
        removeViewBox: false
      }],
      use: [pngquant()]
    }))
    .pipe(gulp.dest(releaseDirectory));
});
