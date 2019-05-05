module.exports = function () {
    $.gulp.task('fonts', function () {
        return $.gulp.src('app/fonts/**/*')
            .pipe($.gulp.dest('dist/fonts'));
    });

    $.gulp.task('fonts:build', function () {
        return $.gulp.src('dist/fonts/**/*')
            .pipe($.gulp.dest('build/fonts'));
    });
};