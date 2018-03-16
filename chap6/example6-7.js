var readline = require('readline');

// create a new interface
var rl = readline.createInterface(process.stdin, process.stdout);

// ask question
rl.question(">>What is the meaning of life?  ", function(answer) {
   console.log("About the meaning of life, you said " + answer);
   rl.setPrompt(">> ");
   rl.prompt();
});

// function to close interface
function closeInterface() {
   rl.close();
   console.log('Leaving Readline');
}

// listen for .leave
rl.on('line', function(cmd) {
   if (cmd.trim() == '.leave') {
      closeInterface();
      return;
   }
   console.log("repeating command: " + cmd);
   rl.prompt();
});

rl.on('close', function() {
    closeInterface();
});
