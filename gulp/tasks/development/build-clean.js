var gulp   = require('gulp');
var del    = require('del');
var config = require('../../config').deleteAssets;

/**
 * Delete folders and files
 */
gulp.task('build-clean', function() {
  return del(config.src);
});