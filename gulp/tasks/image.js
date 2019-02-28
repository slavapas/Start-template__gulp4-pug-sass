let imagemin = require('gulp-imagemin'),
    imageminJpegRecompress = require('imagemin-jpeg-recompress'),
    cache = require('gulp-cache'),
    imgPATH = {
				"input": ["./dev/static/images/**/*.{png,jpg,gif,JPG,PNG,GIF}"],
        "output": "./assets/images/"
    };

module.exports = function () {
	$.gulp.task('img', () => {
			return $.gulp.src(imgPATH.input)
					.pipe(cache(imagemin([
							imagemin.gifsicle({interlaced: true}),
							imagemin.jpegtran({progressive: true}),
							imagemin.optipng({optimizationLevel: 3}),
							imageminJpegRecompress({
									loops: 5,
									min: 70,
									max: 75,
									quality: 'medium'
							})
					], {
							verbose: true
					})))
					.pipe($.gulp.dest(imgPATH.output));
	});
};
