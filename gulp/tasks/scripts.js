module.exports = function () {
    $.gulp.task('scripts:lib', function () {
        return $.gulp.src(['node_modules/jquery/dist/jquery.min.js',
                        'node_modules/slick-carousel/slick/slick.min.js'])
            .pipe($.gp.concat('libs.min.js'))
            .pipe($.gulp.dest('app/js'))
            .pipe($.gulp.dest('dist/js'));
    });

    $.gulp.task('scripts', function () {
        return $.gulp.src('app/js/*.js')
            .pipe($.gulp.dest('dist/js'));
    });

    $.gulp.task('js', function () {
        return $.gulp.src([
            'dist/js/libs.min.js',
            'dist/js/picturefill.js',
            'dist/js/popup.js',
            'dist/js/svgAll.js',
            'dist/js/forIE.js',
            'dist/js/scripts.js'
        ])
            .pipe($.gp.uglify())
            .pipe($.gp.concat('scripts.min.js'))
            .pipe($.gulp.dest('build/js'));
    });
};

