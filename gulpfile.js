var gulp = require('gulp');

var copyScripts = require('ionic-gulp-scripts-copy');
var exec = require('child_process').exec;
 
gulp.task('run:before', function(){
  return copyScripts({ dest: 'www/assets' });
});
 
gulp.task('ios', function (cb) {
  exec('ionic run ios --emulator', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})