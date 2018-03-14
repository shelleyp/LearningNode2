var fs = require('fs'),
    async = require('async'),
    _dir = './data/';

var writeStream = fs.createWriteStream('./log.txt',
      {'flags' : 'a',
       'encoding' : 'utf8',
       'mode' : 0666});

var file = 'data1.txt';

fs.readdir (_dir, function (err, files) {
   files.forEach(function(file) {
       processItem(file);
   });
});

function processItem(file) {
   async.waterfall([
      function checkFile(callback) {
        fs.stat(_dir + file, function(err, stats) {
          callback(err, stats, file);
        });
      },
      function readData(stats, file, callback) {
        if (stats.isFile())
          fs.readFile(_dir + file, 'utf8', function(err, data){
            callback(err,file,data);
          });
      },
      function modify(file, text, callback) {
        var adjdata=text.replace(/somecompany\.com/g,'burningbird.net');
          callback(null, file, adjdata);
      },
      function writeData(file, text, callback) {
        fs.writeFile(_dir + file, text, function(err) {
          callback(err,file);
        });
      },
      function logChange(file, callback) {
        writeStream.write('changed ' + file + '\n', 'utf8', 
          function(err) {
            callback(err);
          })
      }
    ], function (err, result) {
        if (err) 
           console.log(err);
    }); 
}
