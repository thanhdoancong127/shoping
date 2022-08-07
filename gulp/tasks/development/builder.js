var gulp        = require('gulp');
var runSequence = require('run-sequence');

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('build', function(callback) {
  runSequence('build-clean',
  [
    // 'build-styles',
    'build-scripts',
    'copy:images',
    'copy:fonts',
    "build-template"
  ],
  'base64',
  callback);
});