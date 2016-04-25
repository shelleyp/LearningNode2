var repl = require('repl');

repl.start( {
  prompt: 'my repl> ',
  replMode: repl.REPL_MODE_STRICT,
  ignoreUndefined: true,
});
