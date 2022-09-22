(function () {
  'use strict';

  var gulp = require('gulp');
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del', '@jswork/gulp-*']
  });

  //styles
  gulp.task('scripts', function () {
    return gulp
      .src('src/*.js')
      .pipe($.uglify())
      .pipe($.jswork.pkgHeader())
      .pipe(gulp.dest('docs'))
      .pipe(gulp.dest('dist'));
  });
})();
