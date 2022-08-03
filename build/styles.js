(function () {
  'use strict';

  var gulp = require('gulp');
  var autoprefixer = require('autoprefixer');
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del', '@jswork/gulp-*']
  });

  const sass = require('gulp-sass')(require('sass'));

  //styles
  gulp.task('styles', function () {
    return gulp
      .src('src/*.scss')
      .pipe(gulp.dest('dist'))
      .pipe(sass({ outputStyle: 'compressed' }))
      .pipe($.postcss([autoprefixer()]))
      .pipe($.jswork.pkgHeader())
      .pipe(gulp.dest('dist'))
      .pipe(gulp.dest('docs'));
  });
})();
