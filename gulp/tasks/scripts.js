let uglify 			= require('gulp-uglify'),
    concat 			= require('gulp-concat'),
    scriptsPATH = {
				"input": "./dev/static/js/",
				"output": "./assets/js"
    };

module.exports = function () {
    $.gulp.task('libsJS', () => {
        return $.gulp.src(['node_modules/svg4everybody/dist/svg4everybody.min.js'])
            .pipe(concat('libs.min.js'))
            .pipe($.gulp.dest(scriptsPATH.output));
    });

    $.gulp.task('js', () => {
        return $.gulp.src([scriptsPATH.input + '*.js',
            '!' + scriptsPATH.input + 'libs.min.js'])
            .pipe($.gulp.dest(scriptsPATH.output))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });
};
