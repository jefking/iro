var zip = require("gulp-zip");
var gulp = require('gulp');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task("deploy", function () {
  return gulp.src(["./www/**"])
      .pipe(zip("deploy.zip"))
      .pipe(gulp.dest("./www/"));
});