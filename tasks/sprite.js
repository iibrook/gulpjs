var gulp = require('gulp');
var gulp_sprite = require('css-sprite');
var dir=require('./directory.js');

var currentDirectory = dir.currentDirectory;

gulp.task('sprite', function() {
  if (imgDirectory === false) {
    return;
  }

  var sprite = function(spriteDir, imgDirectory, currentDirectory, spriteName) {
    gulp_sprite.create({
      src: spriteDir + '*',
      out: imgDirectory,
      process: 'scss',
      style: currentDirectory + 'sass/' + spriteName + '-sprite.scss',
      name: spriteName + '-sprite',
      orientation: 'binary-tree'
    }, function() {
      console.log(spriteDir + ' is done!');
    });
  }
  var spriteDirectoryList = dir.getDirectoryList(dir.spriteDirectory);
  var imgDirectory = dir.imgDirectory;

  for (var i in spriteDirectoryList) {
    var spriteDir = currentDirectory + 'sprite/' + spriteDirectoryList[i] + '/';
    var root = currentDirectory;
    var spriteName = spriteDirectoryList[i];
    sprite(spriteDir, imgDirectory, currentDirectory, spriteName)
  }

})
