var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var karma = require('gulp-karma');
var browserify = require('gulp-browserify');

gulp.task('appscripts', function() {
    // Single entry point to browserify
    gulp.src('./public/javascripts/logger-sample.js')
        .pipe(browserify({
            insertGlobals : true
        }))
        .pipe(gulp.dest('./public/javascripts/js'));
});

gulp.task('default', ['appscripts']);
