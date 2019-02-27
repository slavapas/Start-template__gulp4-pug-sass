module.exports = function() {
    $.gulp.task('serve', function() {
        $.browserSync.init({
						server: './assets',
						notify: false,
						browser: "google chrome"
        });
    });
};