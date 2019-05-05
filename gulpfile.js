'use strict';

global.$ = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    bs: require('browser-sync').create(),

    path: {
        tasks: require('./gulp/config/tasks.js')
    }
};

$.path.tasks.forEach(function (taskPath) {
    require(taskPath)();
});

$.gulp.task('default', $.gulp.series('clean',
    $.gulp.parallel('pug', 'sass', 'scripts:lib', 'scripts', 'imgMin', 'resize', 'svgSprite', 'svg', 'fonts'),
    $.gulp.parallel('webp'),
    $.gulp.parallel('watch')));

$.gulp.task('build', $.gulp.series('clean:build',
                        $.gulp.parallel('html', 'css', 'js', 'imgMin:build', 'svg:build', 'fonts:build'),
                        $.gulp.series('webp:build')));



