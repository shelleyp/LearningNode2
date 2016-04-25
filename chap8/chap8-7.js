var execfile = require('child_process').execFile,
    child;

child = execfile('./polaroid',
                 ['-s', 'phoenix5a.png', '-f', 'phoenixpolaroid.png'],
                  {cwd: 'snaps'}, function(error, stdout, stderr) {
   if (error) return console.error(error);
   console.log('stdout: ' + stdout);
});
