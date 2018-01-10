
var rev = ($,config)=>{

	const gulp = $.gulp;

	return ()=>{


		var a = gulp.src(config.htmlPath)

			.pipe($.changed(config.htmlDest))
			.pipe($.rePath({
				destPath:'build'
			}))
			.pipe($.myRev())
			.pipe($.htmlmin({collapseWhitespace: true}))
			.pipe(gulp.dest(config.htmlDest))
			

		var b = gulp.src(config.cssPath)
			.pipe($.changed(config.cssDest))
			.pipe($.myRev())
			.pipe($.cleanCss())
			.pipe(gulp.dest(config.cssDest))


		var c = gulp.src(config.jsPath)
			.pipe($.changed(config.jsDest))
			.pipe($.rePath({
				destPath:'build'
			}))
			.pipe($.myRev())
			.pipe($.uglify())
			.pipe(gulp.dest(config.jsDest))


		var d = gulp.src(config.mp3Path)
			.pipe($.changed(config.mp3Dest))
			.pipe(gulp.dest(config.mp3Dest))


		$.merge(a,b,c,d);

	}
}


module.exports = rev;