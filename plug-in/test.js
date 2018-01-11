var through2 = require('through2');
var path = require('path');
var fs = require('fs');
var glob = require("glob")


var config = {};
config.basePath = '../project1/';
config.htmlDest = config.basePath;
config.cssDest = config.basePath + 'build/css/';
config.jsDest = config.basePath + 'build/js/';


// var arrPath = [
//     config.htmlDest + '*.html',
//     config.cssDest + '**/*.css',
//     config.jsDest + '**/*.js'
// ];


var arrPath = ['a.txt']
filePahts(arrPath)


function filePahts(arr) {
    var arrs = [];


    for (let i = 0; i < arr.length; i++) {

        glob(arr[i], function(er, files) {


            glob(arr[i], function(er, files) {

            	// console.log(files)
            	files.map((v,i)=>{
            		// console.log(fs.createReadStream(v))

            		console.log(v)

            		// console.log(fs.createReadStream(v))
	                fs.createReadStream(v)

	                    .pipe(through2(function(chunk, enc, callback) {

	                    	// let str;

	                    	// str = chunk.contents.toString();

	                    	// console.log(chunk.length)

	                    	// str 
	                    	// console.log(chunk)

	                    	console.log(chunk)

	                        this.push(chunk)

	                        callback()

	                    }))

	                    .pipe(fs.createWriteStream('a.txt'))

	                    .on('finish', function () {
						 	console.log('完成')
						})


            	});


            });


        });

    }
    // console.log(arrs)

}