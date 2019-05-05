/**
 * Created by Igor on 28.02.2019.
 */
module.exports = function () {
    $.gulp.task('svgSprite', function () {
        return $.gulp.src('app/img/svgToSprite/*.svg')
            .pipe($.gp.svgmin({
                js2svg: {
                    pretty: true
                }
            }))
            .pipe($.gp.cheerio({
                run: function ($) {
                    $('[fill]').removeAttr('fill');
                    $('[stroke]').removeAttr('stroke');
                    $('[style]').removeAttr('style');
                },
                parserOptions: {xmlMode: true}
            }))
            .pipe($.gp.replace('&gt;', '>'))
            .pipe($.gp.svgSprite({
                mode: {
                    symbol: {
                        sprite: "sprite.svg"
                    }
                }
            }))
            .pipe($.gp.replace('<svg x', '<svg style="display: none;" x'))
            .pipe($.gulp.dest('dist/img/svg'));
    });

    $.gulp.task('svg', function () {
        return $.gulp.src('app/img/svg/*.svg')
            .pipe($.gp.svgmin({
                js2svg: {
                    pretty: true
                }
            }))
            .pipe($.gulp.dest('dist/img/svg'));
    });

    $.gulp.task('svg:build', function () {
        return $.gulp.src('dist/img/svg/**/*.svg')
            .pipe($.gulp.dest('build/img/svg'));
    });
};