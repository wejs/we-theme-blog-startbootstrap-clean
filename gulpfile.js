const gulp = require('gulp'),
 concat = require('gulp-concat'),
 less = require('gulp-less'),
 minifyCSS = require('gulp-minify-css');

function scripts() {
  return gulp.src(['src/js/**/*.js'])
    .pipe(concat('script.js'))
    .pipe(gulp.dest('files/public'));
}
exports.scripts = scripts;

function styles() {
  return gulp.src(['src/less/**/*.less'])
    .pipe(less())
    .on('error', console.log)
    .pipe(minifyCSS())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('files/public'));
}
exports.styles = styles;

function watch_js() {
  return gulp.watch('src/js/**', scripts);
}
exports.watch_js = watch_js;

function watch_css() {
  return gulp.watch('src/less/**', styles);
}
exports.watch_js = watch_js;

exports.watch = gulp.parallel(watch_js, watch_css);

// Default task - Run with command 'gulp'
exports.default = gulp.series(scripts, styles, exports.watch);
