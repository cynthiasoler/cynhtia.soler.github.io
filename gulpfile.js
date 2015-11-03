var gulp        = require('gulp'),
    del         = require('del'),
    cssmin      = require('gulp-cssmin'),
    concat      = require('gulp-concat'),
    concatCss   = require('gulp-concat-css'),
    uglify      = require('gulp-uglify'),
    inject      = require('gulp-inject'),
    browserSync = require('browser-sync').create(),
    modrewrite  = require('connect-modrewrite'),
    nodemon     = require('gulp-nodemon'),
    rename      = require('gulp-rename');

gulp.task('default', ['clean','public', 'serve']);

gulp.task('clean', function() {
    del('public/*');
});

gulp.task('mincss', function () {
    var target = gulp.src('./index.html');
    gulp.src(['./app/css/*.css'])
    .pipe(concatCss('app.css'))
    .pipe(cssmin())
    .pipe(rename('app.min.css'))
    .pipe(gulp.dest('./public/app/css'));

    gulp.src(['./bower_components/bootstrap/dist/css/bootstrap.min.css'])
    .pipe(gulp.dest('./public/app/css'));

    var source = gulp.src('./app/css/*.min.css', {read: false});
    return target.pipe(inject(source)).pipe(gulp.dest('./'));
});

gulp.task('minjs', function () {
    var target = gulp.src('./index.html');
    var bowerPath = './bower_components';
    gulp.src([
        bowerPath+'/angular/angular.js'
        ,bowerPath+'/angular-aria/angular-aria.js'
        ,bowerPath+'/angular-animate/angular-animate.js'
        ,bowerPath+'/angular-material/angular-material.js'
        ,bowerPath+'/angular-route/angular-route.js'
        ,'./app/js/*.js'])
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest('./public/app/js'));

    var source = gulp.src('./app/js/app.min.js', {read: false});
    return target.pipe(inject(source)).pipe(gulp.dest('./'));
});

gulp.task('public',['minjs', 'mincss'], function() {
    gulp.src('./app/views/**/*.html').pipe(gulp.dest('./public/app/views'));
    gulp.src('./index.html').pipe(gulp.dest('./public'));
});

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: './public'
        }
    });
});
