module.exports = function () {
    $.gulp.task('imgMin', function () {
        return $.gulp.src('app/img/**/*.{jpg,gif,png}')
            .pipe($.gulp.dest('dist/img'));
    });

    $.gulp.task('imgMin:build', function () {
        $.gulp.src('dist/img/**/*.png')
            .pipe($.gp.tinypng('lb6ggBjpCDK6NBK70Q3nlJWv7P3vZMyP'))
            .pipe($.gulp.dest('build/img'));

        return $.gulp.src('dist/img/**/*.jpg')
            .pipe($.gp.tinypng('lb6ggBjpCDK6NBK70Q3nlJWv7P3vZMyP'))
            .pipe($.gulp.dest('build/img'))
    });

    $.gulp.task('webp', function() {
        $.gulp.src('dist/img/**/*.jpg')
            .pipe($.gp.webp())
            .pipe($.gulp.dest('dist/img'));

        return $.gulp.src('dist/img/**/*.png')
            .pipe($.gp.webp())
            .pipe($.gulp.dest('dist/img'))
    });

    $.gulp.task('webp:build', function() {
        return $.gulp.src('dist/img/**/*.webp')
            .pipe($.gulp.dest('build/img'))
    });

    $.gulp.task('resize', function() {
        $.gulp.src('app/img/**/*.png')
            .pipe($.gp.imagesResizer({
                width: "200%"
            }))
            .pipe($.gp.rename({
                suffix: "@2x"
            }))
            .pipe($.gulp.dest('dist/img'));

        $.gulp.src('app/img/**/*.jpg')
            .pipe($.gp.imagesResizer({
                width: "200%"
            }))
            .pipe($.gp.rename({
                suffix: "@2x"
            }))
            .pipe($.gulp.dest('dist/img'));

        $.gulp.src('app/img/**/*.png')
            .pipe($.gp.imagesResizer({
                width: "300%"
            }))
            .pipe($.gp.rename({
                suffix: "@3x"
            }))
            .pipe($.gulp.dest('dist/img'));

        return $.gulp.src('app/img/**/*.jpg')
            .pipe($.gp.imagesResizer({
                width: "300%"
            }))
            .pipe($.gp.rename({
                suffix: "@3x"
            }))
            .pipe($.gulp.dest('dist/img'));
    });
};