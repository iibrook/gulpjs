var gulp = require('gulp');
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var minifyHtml = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css');
var rev = require('gulp-rev');
var autoprefixer = require('gulp-autoprefixer');
var dir = require('./directory.js');

var currentDirectory = dir.currentDirectory;
var release = dir.currentDirectory + 'release/';



gulp.task('usemin', function() {
  return gulp.src(currentDirectory + '*.html')
    .pipe(usemin({
      css: [ autoprefixer({
        browsers: [
          'last 5 versions',
          'chrome 30',
          'safari 5',
          'ie 8',
          'opera 12.1'
        ],
            cascade: false
        }),
        minifyCss(),
        'concat',
        rev()],
      html: [minifyHtml({
        empty: true
      })],
      js: [uglify(), rev()],
      inlinejs: [uglify()],
      inlinecss: [minifyCss(), 'concat']
    }))
    .pipe(gulp.dest(release));
});




/* Tutorial

<!-- build:css style.css -->
<link rel="stylesheet" href="css/clear.css"/>
<link rel="stylesheet" href="css/main.css"/>
<!-- endbuild -->

<!-- build:js js/lib.js -->
<script src="../lib/angular-min.js"></script>
<script src="../lib/angular-animate-min.js"></script>
<!-- endbuild -->

<!-- build:js1 js/app.js -->
<script src="js/app.js"></script>
<script src="js/controllers/thing-controller.js"></script>
<script src="js/models/thing-model.js"></script>
<script src="js/views/thing-view.js"></script>
<!-- endbuild -->

<!-- build:remove -->
<script src="js/localhostDependencies.js"></script>
<!-- endbuild -->

<!-- build:inlinejs -->
<script src="../lib/angular-min.js"></script>
<script src="../lib/angular-animate-min.js"></script>
<!-- endbuild -->

<!-- build:inlinecss -->
<link rel="stylesheet" href="css/clear.css"/>
<link rel="stylesheet" href="css/main.css"/>
<!-- endbuild -->

*/
