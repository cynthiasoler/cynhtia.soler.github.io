var gulp = require('gulp'),
browserSync = require('browser-sync');

gulp.task('default', ['server'], function () {

});

gulp.task('server', function() {
    browserSync({
        server: {
            baseDir: './'
        }
    });
});