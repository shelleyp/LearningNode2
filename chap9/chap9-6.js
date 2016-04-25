var InputChecker = require('./class').InputChecker;

// testing new object and event handling
var ic = new InputChecker('Shelley','output');

ic.on('write', function (data) {
   this.writeStream.write(data, 'utf8');
});
ic.addListener('echo', function( data) {
   console.log(this.name + ' wrote ' + data);
});

ic.on('end', function() {
   process.exit();
});

process.stdin.setEncoding('utf8');
process.stdin.on('data', function(input) {
    ic.check(input);
});

