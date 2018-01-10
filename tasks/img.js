// img:压缩、添加版本号
var img = ($,config) => {
	
	const gulp = $.gulp;
	

	return ()=>{
		
	    console.log('打包开始:')
	    console.log('img:压缩、添加版本号中......')
	    
	    var stream = gulp.src(config.imgPath)
	        // .pipe($.cached('img'))	            // 压缩图片
	        .pipe($.changed(config.imgDest))
	        
	        .pipe($.imagemin([
	                $.imagemin.gifsicle(), 
	                $.imagemin.jpegtran(), 
	                $.imagemin.optipng(), 
	                $.imagemin.svgo(), 
	                $.pngquant({quality:'80'}),
	                $.mozjpeg({quality:'60'})
	                ],{verbose:true}))
	 		
	        .pipe(gulp.dest(config.imgDest))
	    	
	    return stream;

	}

}


module.exports = img;