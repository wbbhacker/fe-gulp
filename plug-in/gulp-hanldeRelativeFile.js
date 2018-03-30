var through = require('through2');
var path = require('path');
var fs = require('fs');
var glob = require("glob");
var vfs = require('vinyl-fs');

	
var hanldeRelativeFile = (options,basePath) => {


    let timestamp = new Date().getTime();
    
   

    let transform = through.obj(function(chunk, enc, callback) {


        let regex, file;
        file = path.parse(chunk.path);
        regex = new RegExp(file.name + '\\' + file.ext + '\\?v=\\d*');

        filePahts(options,regex,basePath);


        this.push(chunk);

        callback();
        

    });


    return transform;
}


function filePahts(arr,reg,basePath){

    let timestamp = new  Date().getTime();

    arr.map(function(v,i){

        glob(v, function (er, files) { 
            var destPath;
            switch(files[0].match(/(\.css|\.js|\.html)/g)[0]){

                case '.css':
                    // console.log('.css');
                    // console.log(files);
                    destPath = basePath + 'build/css/';

                    break;
                case '.js':
                    // console.log('js');
                    // console.log(files);
                    destPath = basePath + 'build/css/';

                    break;
                case '.html':
                    // console.log('html')
                    // console.log(files)
                    destPath = basePath;
                    break;
            }

            vfs.src(files)
                .pipe(through.obj(function (chunk, enc, callback) {

                        var str;

                        if(chunk.path.search(/\\lib\\/) == -1) {

                            str = chunk.contents.toString();

                            strs = str.replace(reg,function(wrod){
                                console.log(wrod.split('=')[0]+'='+timestamp)
                                return wrod.split('=')[0]+'='+timestamp;
                            });

                            chunk.contents = new Buffer(strs);

                        }

                        this.push(chunk)
                        callback()

                }))
                .pipe(vfs.dest(destPath))

        });

    });

}



module.exports = hanldeRelativeFile;