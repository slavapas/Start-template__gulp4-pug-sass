let plumber 				= require('gulp-plumber'),
    sass					 	= require('gulp-sass'),
    autoprefixer 		= require('gulp-autoprefixer'),
    csso 						= require('gulp-csso'),
    csscomb 				= require('gulp-csscomb'),
    sourcemaps 			= require('gulp-sourcemaps'),
		rename 					= require('gulp-rename'),
		notify       		= require('gulp-notify'),
    stylesPATH 			= {
				"input": "./dev/static/styles/",
				"output": "./assets/css"
    };

module.exports = function () {
    $.gulp.task('styles', () => {
        return $.gulp.src(stylesPATH.input + 'styles.sass')
            .pipe(plumber())
						.pipe(sourcemaps.init())
            .pipe(sass().on("error", notify.onError()))
            .pipe(autoprefixer({
                browsers: ['last 3 version']
            }))
						.pipe(sourcemaps.write())
						.pipe(csscomb())
            .pipe(csso())
            .pipe(rename('styles.min.css'))
            .pipe($.gulp.dest(stylesPATH.output))
            .on('end', $.browserSync.reload);
    });
};
