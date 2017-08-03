	let gulp = require('gulp');
	let sass = require('gulp-sass');
	let browserSync = require('browser-sync').create();

	gulp.task('styles', function() {
		gulp.src('./sass/main.sass')
			.pipe(sass({indentedSyntax: true}).on('error', sass.logError))
			.pipe(gulp.dest('./css'))
			.pipe(browserSync.reload({stream: true}));
	});

	gulp.task('serve', function() {
		browserSync.init({
			server: {
				baseDir: './'
			}
		});

		gulp.watch('./sass/*.sass', ['styles']);
		gulp.watch('./**?*.html').on('change', browserSync.reload);
	});

	gulp.task('default', ['styles', 'serve']);