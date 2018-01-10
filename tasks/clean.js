
var clean = ($,config)=>{

	const gulp = $.gulp;

	return ()=>{
		

		var a = gulp.src(config.basePath+'build')
					.pipe($.clean());

		var b = gulp.src(config.basePath+'*.html')
					.pipe($.clean());


	}
}


module.exports = clean;