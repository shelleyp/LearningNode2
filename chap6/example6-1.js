var fs = require('fs');
var Mode = require('stat-mode');

fs.stat('./phoenix5a.png', function(err,stats) {
   if (err) return console.log(err);
   
   // get permissions
   var mode = new Mode(stats);

   console.log(mode.toString());
   console.log('Group execute ' + mode.group.execute);
   console.log('Others write ' + mode.others.write);
   console.log('Owner read ' + mode.owner.read);
});
