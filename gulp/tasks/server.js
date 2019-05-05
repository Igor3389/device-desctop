module.exports = function () {
    $.gulp.task('server', function () {
        $.bs.init({
            server: {
                baseDir: './dist'
            },
            stream: true
        });
        $.bs.watch('dist', $.bs.reload)
    });
};