var through = require('through2');
var path = require('path');
var fs = require('fs');
var glob = require("glob")

	
var hanldeRelativeFile = (options, reg) => {


    let timestamp = new Date().getTime();

    let transform = through.obj(function(chunk, enc, callback) {


        let regex, file;
        file = path.parse(chunk.path);
        regex = new RegExp(file.name + '\\' + file.ext + '\\?v=\\d*');

        console.log(regex)






        this.push(chunk);

        callback();


    });


    return transform;
}


function filePahts(arr){
	var arrs = [];

	for(let i=0; i<arr.length; i++){

		glob(arr[i], function (er, files) {

			fs.createReadStream('ex.txt')
            .pipe(through2(function(chunk, enc, callback) {
                for (var i = 0; i < chunk.length; i++)
                    if (chunk[i] == 97)
                        chunk[i] = 122 // swap 'a' for 'z' 

                this.push(chunk)

                callback()
            }))
            .pipe(fs.createWriteStream('out.txt'))

            
		});

	}	
}



module.exports = hanldeRelativeFile;