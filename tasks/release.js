var gulp = require('gulp');
var dir = require('./directory.js');
var runSequence = require('gulp-run-sequence');

gulp.task("release",['imagemin','usemin','reveasy'])

gulp.task('release', function(cb) {
  runSequence('imagemin','usemin', 'reveasy');
});
