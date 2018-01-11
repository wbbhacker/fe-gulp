const gulp = require('gulp');
	// gulp插件加载
const $ = require('gulp-load-plugins')(); 
	
	// 任务配置
const config = require('./config.js');

	// 任务加载
const requireDir = require('require-dir');
const tasks = requireDir('./tasks');
	// 图片压缩

// 服务器
$.browserSync = require('browser-sync').create();
$.reload = $.browserSync.reload;


$.gulp = gulp;
$.pngquant = require('imagemin-pngquant');
$.mozjpeg = require('imagemin-mozjpeg');
$.merge = require('merge-stream');
$.myRev = require('./plug-in/gulp-addRandomRev.js');
$.rePath = require('./plug-in/gulp-rewrite-path.js');
$.makeDir = require('make-dir');


//  --监视任务------------------------------------------------
gulp.watch(config.htmlPath).on('change', $.reload);
gulp.watch(config.scssPath,['sass']);
gulp.watch(config.jsPath,['js']);
gulp.watch(config.lessPath,['less']);


//  --构建相关任务---------------------------------------
	// 项目初始化
gulp.task('init',tasks.init($,config));
	
	
	// 开发任务
gulp.task('server',tasks.server($,config));
gulp.task('sass',tasks.sass($,config));
gulp.task('js',tasks.js($,config));

gulp.task('less',tasks.less($,config));
	
	// 打包任务
gulp.task('img',tasks.img($,config));


gulp.task('rev',tasks.rev($,config));

gulp.task('clean',tasks.clean($,config));

gulp.task('rePack',$.sequence('clean','img','rev'));

gulp.task('pack',$.sequence('img','rev'));

	// 默认任务
gulp.task('default',['server']);

