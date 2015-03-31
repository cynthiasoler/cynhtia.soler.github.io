var gulp        = require('gulp'),
    del         = require('del'),
    run         = require('gulp-run'),
    htmlmin     = require('gulp-htmlmin'),
    ngTemplates = require('gulp-ng-templates'),
    cssmin      = require('gulp-minify-css'),
    uglify      = require('gulp-uglify'),
    concat      = require('gulp-concat'),
    jshint      = require('gulp-jshint'),
    gulpif      = require('gulp-if'),
    browserSync = require('browser-sync'),
    reload      = browserSync.reload;

gulp.task('serve', ['bower', 'clean', 'lint','cssmin' , 'js' ,'server'], function () {
    return gulp.watch([
        '*.js', 'app/*.js', '*.html', 'app/css/*.css'
    ], [
        'lint', 'js', browserSync.reload
    ]);
});

gulp.task('serve:minified', function() {

});

gulp.task('bower', function () {
    run('bower install').exec();
});

gulp.task('clean', function() {
    del(['./dist']);
});

gulp.task('cssmin', function () {
    return gulp.src('app/css/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('dist'));
});

gulp.task('lint', function() {
    return gulp.src(['app/js/*.js, app/js/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('server', function() {
    browserSync({server: {baseDir: './'}});
});

gulp.task('js', function() {
    return gulp.src(['app/js/**/*.js', 'app/templates/*.html'])
        .pipe(gulpif(/\.html$/, htmlmin({ collapseWhitespace: true })))
        .pipe(gulpif(/\.html$/, ngTemplates()))
        .pipe(concat('app.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('js:min', function() {
    return gulp.src(['app/**/*.js', 'app/templates/*.html'])
        .pipe(gulpif(/\.html$/, htmlmin({ collapseWhitespace: true })))
        .pipe(gulpif(/\.html$/, ngTemplates()))
        .pipe(uglify({ mangle: false }))
        .pipe(concat('app.js'))
        .pipe(gulp.dest('dist'));
});