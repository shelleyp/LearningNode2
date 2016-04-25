var vm = require('vm');

var sandbox = {
   process: 'this baby',
   require: 'that'
};

vm.runInNewContext('console.log(process);console.log(require)',sandbox);
