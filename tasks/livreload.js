var gulp = require('gulp');
var connect = require('gulp-connect');
var dir = require('./directory.js');
var gulpif = require('gulp-if');
var pxtorem = require('gulp-pxtorem');
var open = require('gulp-open');
var portfinder = require('portfinder');
var currentDirectory = dir.currentDirectory;

var arg = process.argv;
var setOpen = false;
for (var i in arg) {
  if (arg.indexOf('-pxtorem') > -1 || arg.indexOf('-p') > -1) {
    var setPxtorem = true;
  };
  if (arg.indexOf('-b') > -1 || arg.indexOf('-browser') > -1) {
    setOpen = true;
  };

}

gulp.task('connect', function() {
  portfinder.getPort(function(err, port) {
    //find the avaliable port;
    connect.server({
      root: currentDirectory,
      port: port,
      livereload: true,
      livereload: {
        port: port + 27729
      }
    });
  })
});

/****************
 * Open Url
 *****************/

gulp.task('open', function() {
  if (setOpen === false) {
    return
  }
  portfinder.getPort(function(err, port) {
    var options = {
      url: 'http://localhost:'+(port-1),
      app: 'google chrome'
    };
    console.log(options);
    gulp.src(currentDirectory+'index.html')
      .pipe(open('', options));
  })
});

/*******************
 * Sass Livereload
 ********************/
var sass = require('gulp-sass');
var pxtoremOptions = {
  root_value: 16,
  unit_precision: 5,
  prop_white_list: ['font', 'font-size', 'line-height', 'letter-spacing', 'background-position', 'background-size', 'border', 'width', 'height', 'margin', 'margin-top', 'margin-left', 'margin-right', 'margin-bottom', 'padding', 'padding-left', 'padding-right', 'padding-top', 'padding-bottom', 'border', 'border-left', 'border-right', 'border-top', 'border-bottom', 'box-shadow', '-webkit-box-shadow', 'top', 'left', 'right', 'bottom'],
  replace: true,
  media_query: false
};
var postcssOptions = {
  map: false
};

gulp.task('sass', function() {
  gulp.src(currentDirectory + 'sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulpif(setPxtorem, pxtorem(pxtoremOptions, postcssOptions)))
    .pipe(gulp.dest(currentDirectory + 'css/'))
    .pipe(connect.reload())
});

gulp.task('html', function() {
  gulp.src(currentDirectory + '*.html')
    .pipe(connect.reload());
});

gulp.task('livereload-watch', function() {
  gulp.watch([currentDirectory + '*.html'], ['html']);
  gulp.watch([currentDirectory + 'sass/**/*.scss'], ['sass']);
});

gulp.task('livereload', ['connect', 'livereload-watch', 'open']);
