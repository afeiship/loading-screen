(function() {
  'use strict';

  var gulp = require('gulp');
  var autoprefixer = require('autoprefixer');
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });

  //styles
  gulp.task('styles', function() {
    return gulp
      .src('src/*.scss')
      .pipe(gulp.dest('dist'))
      .pipe($.sass({ outputStyle: 'compressed' }))
      .pipe($.postcss([autoprefixer()]))
      .pipe(gulp.dest('dist'))
      .pipe(gulp.dest('public'));
  });
})();
