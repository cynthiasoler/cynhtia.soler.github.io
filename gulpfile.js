var gulp        = require('gulp'),
    del         = require('del'),
    run         = require('gulp-run'),
    htmlmin     = require('gulp-htmlmin'),
    ngTemplates = require('gulp-ng-templates'),
    cssmin      = require('gulp-minify-css'),
    uglify      = require('gulp-uglify'),
    concat      = require('gulp-concat'),
    gulpif      = require('gulp-if'),
    browserSync = require('browser-sync'),
    inject      = require('gulp-inject'),
    reload      = browserSync.reload;

gulp.task('default', ['clean','index' ,'server'], function () {
    return gulp.watch([
        '*.js', 'app/*.js', '*.html', 'app/css/*.css'
    ], ['js', reload
    ]);
});

gulp.task('clean', function() {
    del(['./dist']);
});

gulp.task('cssmin', function () {
    return gulp.src('app/css/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('index.html'));
});

gulp.task('index', function () {
    var target = gulp.src('./index.html');
    var bowerPath = './bower_components';
    var sources = gulp.src([
        bowerPath+'/angular/angular.js'
        ,bowerPath+'/angular-aria/angular-aria.js'
        ,bowerPath+'/angular-animate/angular-animate.js'
        ,bowerPath+'/angular-material/angular-material.js'
        ,bowerPath+'/angular-route/angular-route.js'
        ,'./app/**/*.js']);

    return target.pipe(inject(sources))
        .pipe(gulp.dest('./'));
});

gulp.task('server', function() {
    browserSync({server: {baseDir: './'}});
});

gulp.task('js:min', function() {
    return gulp.src(['app/**/*.js', 'app/templates/*.html'])
        .pipe(gulpif(/\.html$/, htmlmin({ collapseWhitespace: true })))
        .pipe(gulpif(/\.html$/, ngTemplates()))
        .pipe(uglify({ mangle: false }))
        .pipe(concat('app.js'))
        .pipe(gulp.dest('dist'));
});