const gulp = require('gulp');

exports.default = function () {
  return gulp.src('src/*.html')
    .pipe(gulp.dest('docs/'));
}
