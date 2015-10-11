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
    reload      = browserSync.reload,
    modrewrite = require('connect-modrewrite');

gulp.task('default', ['clean', 'public', 'serve'], function () {
    return gulp.watch([
        '*.js', 'app/*.js', '*.html', 'app/css/*.css'
    ], reload);
});

gulp.task('clean', function() {
    del(['./public']);
});

gulp.task('css', function () {
    var target = gulp.src('./index.html');
    var sources = gulp.src(['app/css/*.css', './bower_components/angular-material/angular-material.css']);
    return target.pipe(inject(sources))
        .pipe(gulp.dest('./public'));
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
        .pipe(gulp.dest('./public'));
});

gulp.task('public',['index', 'css'], function() {
    gulp.src('./app/css/**/*.css').pipe(gulp.dest('./public/app/css'));
    gulp.src('./app/js/**/*.js').pipe(gulp.dest('./public/app/js'));
    gulp.src('./app/views/**/*.html').pipe(gulp.dest('./public/app/views'));
});

gulp.task('serve', function() {
    browserSync.init(null, {
        server: {
            baseDir: '/public',
            middleware: [
                modrewrite([
                    '!\\.\\w+$ /index.html [L]'
                ])
            ]
        }
    });

    gulp.watch(['app/**/*.html'], reload);
    gulp.watch(['app/css/**/*.css'], ['styles', reload]);
    gulp.watch(['app/js/**/*.js'], reload);
    //gulp.watch(['app/images/**/*'], reload);
});
