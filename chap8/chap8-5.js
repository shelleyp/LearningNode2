var exec = require('child_process').exec,
    child;

child = exec('./app', function(error, stdout, stderr) {
   if (error) return console.error(error);
   console.log('stdout: ' + stdout);

});
