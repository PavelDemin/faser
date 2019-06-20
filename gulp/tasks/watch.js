module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch('./dev/blocks/**/*.pug', $.gulp.series('pug'));
        $.gulp.watch('./dev/*.pug', $.gulp.series('pug'));
        $.gulp.watch('./dev/blocks/**/*.scss', $.gulp.series('styles:dev'));
        $.gulp.watch('./dev/*.scss', $.gulp.series('styles:dev'));
        $.gulp.watch('./dev/static/images*.{png,jpg,gif}');
  //          './dev/static/images/content/**/*.{png,jpg,gif}'], $.gulp.series('img:dev'));
  //      $.gulp.watch('./dev/static/images/svg/*.svg', $.gulp.series('svg'));
        $.gulp.watch('./dev/static/js/**/*.js', $.gulp.series('js:dev'));
    });
};