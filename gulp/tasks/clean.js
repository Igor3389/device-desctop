/**
 * Created by Igor on 28.02.2019.
 */
module.exports = function () {
    $.gulp.task('clean', function () {
        return $.gulp.src('dist/*')
            .pipe($.gp.clean());
    });

    $.gulp.task('clean:build', function () {
        return $.gulp.src('build/*')
            .pipe($.gp.clean());
    });
};

