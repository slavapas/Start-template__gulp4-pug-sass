module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch('./dev/pug/**/*.pug', $.gulp.series('pug'));
        $.gulp.watch('./dev/static/styles/**/*.sass', $.gulp.series('styles'));
        $.gulp.watch(['./dev/static/images/general/**/*.{png,jpg,gif,JPG,PNG,GIF}',
						'./dev/static/images/content/**/*.{png,jpg,gif,JPG,PNG,GIF}'], $.gulp.series('img'));
				$.gulp.watch('./dev/static/images/svg/*.svg', $.gulp.series('svg'));
        $.gulp.watch('./dev/static/js/**/*.js', $.gulp.series('js'));
    });
};