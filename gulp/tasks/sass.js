module.exports = function () {
    $.gulp.task('sass', function () {
        return $.gulp.src('app/sass/**/*.scss')
            //.pipe($.gp.sourcemaps.init())
            .pipe($.gp.sass())
            .on("error", $.gp.notify.onError({
                title: "Error running something"
            }))
            //.pipe($.gp.sourcemaps.write())
            //.pipe($.gulp.dest('app/css'))
            .pipe($.gulp.dest('dist/css'));
    });

    $.gulp.task('css', function () {
        return $.gulp.src('dist/css/**/*.css')
            .pipe($.gp.autoprefixer({
                browsers: ['> 1%']
            }))
            .pipe($.gp.csso({
                restructure: false,
                sourceMap: true,
                debug: true
            }))
            .pipe($.gp.rename({
                suffix: ".min"
            }))
            .pipe($.gulp.dest('build/css'));
    });
};
