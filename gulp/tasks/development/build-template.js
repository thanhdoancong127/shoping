var gulp = require("gulp");

var template = require("gulp-template-html");

gulp.task("build-template", function () {
  return gulp.src("./app/docs/pages/*.html")
    .pipe(template("./app/docs/template/main.html"))
    .pipe(gulp.dest("./dist/docs"));
});
