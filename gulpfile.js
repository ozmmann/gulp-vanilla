var gulp = require('gulp'),
	cssmin = require('gulp-cssmin'),
	includer = require('gulp-htmlincluder'),
	connect = require('gulp-connect'),
	del = require("del");

gulp.task('connect', function() {
  connect.server({
    root: 'build',
    livereload: true
  });
});

gulp.task('cssmin', function () {
    gulp.src('dev/css/**/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('build/css'))
        .pipe(connect.reload());
});

gulp.task('htmlIncluder', function() {
    gulp.src('dev/**/*.html')
    	.pipe(includer())
        .pipe(gulp.dest('build/'))
        .pipe(connect.reload());
});

gulp.task('move', function() {
    gulp.src('dev/img/**/*.*')
    	.pipe(gulp.dest('build/img'))
    	.pipe(connect.reload());

    gulp.src('dev/js/**/*.*')
    	.pipe(gulp.dest('build/js'))
    	.pipe(connect.reload());
});

gulp.task("clean", function () {
  return del("build/img/**/*.*");
});

gulp.task('watch', function () {
	gulp.watch('dev/css/*.css',['cssmin']);
	gulp.watch('dev/**/*.html',['htmlIncluder']);
	gulp.watch('dev/img/**/*.*', ['clean', 'move']);
	gulp.watch('dev/js/**/*.*', ['move']);
});

gulp.task('default', ['connect', 'watch', 'cssmin', 'htmlIncluder', 'clean', 'move']);
