
const config = {};

config.basePath = '/web/sale_auto/20180528_changhe_PC/';

// config.basePath = '/web/sale_auto/20180528_changhe_WAP/';

// config.basePath = '/web/sale_go/20180525_huawei/';

// config.basePath = '/web/sale_go/wbb-demo-1/football-3D/';

// config.basePath = '/web/sale_go/20180508_mido/';

// config.basePath = '/web/sale_go/20180518_kitchen/';

// config.basePath = '/web/sale_go/wenshi-data/';

// config.basePath = '/web/sale_auto/20180512_audi/';


// config.basePath = '/web/sale_auto/20180511_BMW/';
// config.basePath = '/web/sale_auto/20180511_BMW_WAP/';
// config.basePath = '/web/sale_go/20180502_HNA/';
// config.basePath = '/web/sale_auto/20180502_BMWx1_PC/';
// config.basePath = '/web/sale_auto/20180502_BMWx1_WAP/';
// config.basePath = '/worktest/BMWx1-PC/';
// config.basePath = '/web/sale_go/20180425_huoxiang/';
// config.basePath = '/web/sale_go/20180419_helix/';
// config.basePath = '/web/sale_go/20180326-demo/';
// config.basePath = '/worktest/loading-demo/';
// config.basePath = '/worktest/gulp-demo1/';
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