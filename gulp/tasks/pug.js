/**
 * Created by Igor on 27.02.2019.
 */
module.exports = function () {
    $.gulp.task('pug', function () {
        return $.gulp.src('app/pug/*.pug')
            .pipe($.gp.pug({
                pretty: true
            }))
            .pipe($.gulp.dest('dist'));
    });

    $.gulp.task('html', function () {
        return $.gulp.src('dist/*.html')
            .pipe($.gp.replace('<link rel="stylesheet" href="css/styles.css">', '<link rel="stylesheet" href="css/styles.min.css">'))
            .pipe($.gp.htmlmin({ collapseWhitespace: true }))
            .pipe($.gulp.dest('build'));
    });
};
