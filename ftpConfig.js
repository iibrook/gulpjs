var gutil = require('gulp-util');
module.exports = {
  localServer: {
    host: '192.168.2.120',
    user: 'ftp',
    password: 'lee',
    parallel: 10,
    log: gutil.log
  },
  localServerUrl:'192.168.2.11',
  remoteServer: {
    host: '192.168.2.120',
    user: 'ftp',
    password: 'lee',
    parallel: 10,
    log: gutil.log
  },
  remoteServerUrl:'http://removete'
}
