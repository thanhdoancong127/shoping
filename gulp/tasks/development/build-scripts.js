const {src, parallel, series, dest} = require('gulp');
const gulpif = require("gulp-if");
const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const glob = require('glob');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

const production = false;

gulp.task('build-scripts', function () {
    var files = glob.sync('./app/assets/js/**/*.js');
    console.log(files);
    files.filter(function(entry) {
        return !entry.includes("/common/");
    })
    .map(function(entry) {
        return (
            browserify({
                entries: [entry],
                debug: false
            })
            .transform(babelify, { presets: ['@babel/preset-env'] })
            .bundle()
            .pipe(source(entry.replace('./app/', '')))
            // To load existing source maps
            // This will cause sourceMaps to use the previous sourcemap to create an ultimate sourcemap
            .pipe(gulpif(production, rename({ extname: '.min.js' })))
            .pipe(buffer())
            .pipe(gulpif(!production, sourcemaps.init({ loadMaps: true })))
            .pipe(gulpif(production, uglify()))
            .pipe(gulpif(!production, sourcemaps.write('./')))
            .pipe(dest("dist"))
        );
    });
});