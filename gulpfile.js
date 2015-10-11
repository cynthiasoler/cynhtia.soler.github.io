var gulp        = require('gulp'),
    run         = require('gulp-run'),
    cssmin      = require('gulp-cssmin'),
    concat      = require('gulp-concat'),
    concatCss   = require('gulp-concat-css'),
    uglify      = require('gulp-uglify'),
    inject      = require('gulp-inject'),
    browserSync = require('browser-sync'),
    reload      = browserSync.reload,
    modrewrite = require('connect-modrewrite'),
    nodemon = require('gulp-nodemon'),
    rename = require('gulp-rename');

gulp.task('default', ['clean', 'public', 'serve'], function () {
    return gulp.watch('public', reload);
});

gulp.task('clean', function() {
    run('rm public', function(){
      console.log('directory deleted');
    });
});

gulp.task('mincss', function () {
    var target = gulp.src('./index.html');
    gulp.src(['app/css/*.css', './bower_components/angular-material/angular-material.css'])
    .pipe(concatCss('app.css'))
    .pipe(cssmin())
    .pipe(rename('app.min.css'))
    .pipe(gulp.dest('./public/css'));

    var source = gulp.src('./public/css/*.css');
    return target.pipe(inject(source)).pipe(gulp.dest('./public'));
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
        ,'./app/**/*.js'])
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest('./public/js'));

    var source = gulp.src('./public/js/*.js');
    return target.pipe(inject(source)).pipe(gulp.dest('./public'));
});

gulp.task('public',['minjs', 'mincss'], function() {
    gulp.src('./app/views/**/*.html').pipe(gulp.dest('./public/views'));
});

gulp.task('server', function () {
  nodemon({
    script: 'server.js'
  , ext: 'js html'
  , env: { 'NODE_ENV': 'development' }
  })
    .on('restart', function () {
    console.log('restarted!')
  })
})

gulp.task('serve', ['server'], function() {
    browserSync({server: {baseDir: './public'}});
});
