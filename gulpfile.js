var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('styles', function () {
  return gulp.src('scss/**/*.scss')
   .pipe(sourcemaps.init())
   .pipe(sass().on('error', sass.logError))
   .pipe(sourcemaps.write('.map'))
   .pipe(gulp.dest('html/css'));
 });

gulp.task('default',function() {
  gulp.watch('scss/**/*.scss',['styles']);
});



