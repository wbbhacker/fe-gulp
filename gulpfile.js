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
$.makeDir = require('make-dir');
$.chalk = require('chalk');

$.myRev = require('./plug-in/gulp-addRandomRev.js');
$.rePath = require('./plug-in/gulp-rewrite-path.js');

$.HRF = require('./plug-in/gulp-hanldeRelativeFile.js');


//  --监视任务------------------------------------------------
gulp.watch(config.htmlPath).on('change', $.reload);
gulp.watch(config.scssPath,['sass']);
gulp.watch(config.jsPath,['js']);
gulp.watch(config.lessPath,['less']);

//  --构建相关任务---------------------------------------
	// 项目初始化

gulp.task('init',tasks.init($,config));
	
	// 开发任务
		// 服务器
gulp.task('server',tasks.server($,config));
		// 监听sass
gulp.task('sass',tasks.sass($,config));
		//监听js
gulp.task('js',tasks.js($,config));
		// 监听less
gulp.task('less',tasks.less($,config));
	
	
	// 打包任务

		// 清除缓存
gulp.task('cleancache',tasks.cleancache($,config));


		// 图片压缩

gulp.task('img',tasks.img($,config,false));
gulp.task('reimg',tasks.img($,config,true));


		// 删除文件夹
gulp.task('clean',tasks.clean($,config));

		// js,img,css处理
gulp.task('rev',tasks.rev($,config));
	
	
	// 命令
gulp.task('rebuild',$.sequence('clean','reimg','rev'));

gulp.task('build',$.sequence('img','rev'));

	// 默认任务
gulp.task('default',['server']);

