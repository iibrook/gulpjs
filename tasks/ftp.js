var gulp = require('gulp');
var gutil = require('gulp-util');
var ftp = require('gulp-ftp');
var dir=require('./directory.js');
var config=require('../ftpConfig.js');


var imgName=dir.imgName;
var arg = process.argv;
for (var i in arg) {
  if (arg.indexOf('-l') > -1 || arg.indexOf('-local') > -1|| arg.indexOf('-localHost')>-1) {
    var ftpServer=ftp.localServer;
    var serverUrl=ftp.localServerUrl;
    break;
  };
  if(arg.indexOf('-r')>-1||arg.indexOf('-remote')>-1||arg.indexOf('-remotes')>-1){
    var ftpServer=ftp.remoteServer;
    var serverUrl=ftp.remoteServerUrl;
    break
  };
}

gulp.task('ftp', function() {
    var conn = ftp.create(ftpServer);
    var globs = [
        'release/'+imgName+'/**',
        'release/css/**',
        'release/js/**',
        'release/fonts/**',
        'release/*.html'
    ];
    return gulp.src(globs, {
            base: 'release/',
            buffer: false
        })
        .pipe(conn.newer(serverUrl))
        .pipe(conn.dest(serverUrl));
});
