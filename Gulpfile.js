var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var babel = require('babelify');

var browserifyTask = function () {
    var bundler = browserify({entries: "app/src/index.jsx"}).transform(babel);

    var bundle = function () {

        bundler
            .bundle()
            .pipe(source("index.js"))
            .pipe(gulp.dest('app/dist'));

    };

    return bundle();
};

gulp.task('browserify', [], browserifyTask());

module.exports = browserifyTask;
