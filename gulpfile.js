var gulp = require('gulp');
var requireDir = require('require-dir');
var tasks = requireDir('./tasks');

/*
  Task-list:
    ✓gulp livereload->实时加载页面的变化.
      ♡gulp livereload -p  开启px to rem 模式 适用于手机端~
      ♡gulp livereload -b  开启浏览器
    ✓gulp sprite   ->sprite的生成(雪碧图的生成).
    ✓gulp sass     ->实时sass监控
    ✓gulp release   ->部署程序.
      ♡gulp imagemin ->图片压缩.
      ♡gulp usemin   ->uglify concat
      ♡gulp ftp -l  ->本地服务器的上传
      ♡gulp ftp -r  ->远程服务器的上传
      ♡gulp reveasy   ->添加版本号
    ✓gulp jasmine   ->单元测试
*/
