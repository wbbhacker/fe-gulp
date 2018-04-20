const config = {};

// config.basePath = '/worktest/gulp-demo1/';
config.basePath = '/web/sale_go/20180419_helix/';
// config.basePath  = '/worktest/gulp-demo/';

// config.basePath = '/web/sale_go/20180402-watsons/';
// config.basePath = '/web/sale_go/20180314_Panasonic/';
// config.basePath = '/web/sale_go/20180226_heibaoB/';
// config.basePath = '/web/sale_go/20180306_demo/';
// config.basePath = '/2018/go/0209/wenshi/'
// config.basePath = '/web/sale_auto/20180322_avancier/';
// config.basePath = '/web/sale_go/20180315_pingan/';
// config.basePath = '/web/sale_go/20180327-demo/';
// config.basePath = '/2018/go/0125/sony-ps4/';

<<<<<<< HEAD
=======
<<<<<<< HEAD
config.basePath = '../../web/sale_auto/20180322_avancier/';
=======
>>>>>>> 144dec56a756f77e1b8d0e55da54ee7838d6ad21


>>>>>>> 145911ce0d9294d33c5420e0a818a1d919927a0c
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