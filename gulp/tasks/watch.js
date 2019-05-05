/**
 * Created by Igor on 27.02.2019.
 */
module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch('app/pug/**/*.pug', $.gulp.series('pug'));
        $.gulp.watch('app/fonts/**/*', $.gulp.series('fonts'));
        $.gulp.watch('app/sass/**/*.scss', $.gulp.series('sass'));
        $.gulp.watch('app/js/**/*.js', $.gulp.series('scripts'));
    });
};
