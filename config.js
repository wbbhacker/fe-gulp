const config = {};

// config.basePath = '../2018/go/0125/sony-ps4/';

config.basePath = '../2018/go/0127/gujian/';

// config.basePath = 'project/';

// config.basePath = '../2018/auto-now/0119/wolkswagen/';
// config.basePath = '../2018/go/0122/kfc-wap/';

// config.basePath = '/2018/go/0201/changlong/';


config.port = 3000;


config.htmlPath = config.basePath+'static/**/*.html';
config.htmlDest = config.basePath;

config.lessPath = config.basePath+'static/less/**/*.less';
config.lessDest = config.basePath+'static/css/';


config.scssPath = config.basePath+'static/scss/**/*.scss';
config.scssDest = config.basePath+'static/css/';

config.cssPath = config.basePath+'static/css/**/*.css';
config.cssDest = config.basePath+'build/css/';

config.jsPath = config.basePath+'static/js/**/*.js';
config.jsDest = config.basePath+'build/js/';

config.imgPath = config.basePath+'static/img/**/*.{png,gif,ico,jpg}';
config.imgDest = config.basePath+ 'build/img/';

config.mp3Path = config.basePath + 'static/music/**/*.mp3';
config.mp3Dest = config.basePath + 'build/music/';


config.serverPath = config.basePath+'static/';

module.exports = config