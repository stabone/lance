/* jslint node: true */
'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin');

var paths = {
    js: './dev/js/script.js'
};

gulp.task('icons', function () {
    return gulp.src('./dev/icons/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./assets/icons'));
});

gulp.task('sass', function () {
    return gulp.src('./sass/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('js', function () {
    return gulp.src(paths.js)
        .pipe(uglify())
        .pipe(gulp.dest('./js'));
});

gulp.task('watch', function () {
    gulp.watch('./sass/*.scss', ['sass']);
    gulp.watch(paths.js, ['js']);
});

gulp.task('default', ['watch', 'js', 'sass']);
