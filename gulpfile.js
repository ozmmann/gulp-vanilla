var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var includer = require('gulp-htmlincluder');
 
gulp.task('cssmin', function () {
    gulp.src('dev/css/**/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('build/css'));
});

gulp.task('htmlIncluder', function() {
    gulp.src('dev/**/*.html')
    	.pipe(includer())
        .pipe(gulp.dest('build/'));
});