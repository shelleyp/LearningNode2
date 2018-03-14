var vm = require('vm');
var util = require('util');

var sandbox = {
     count1 : 1
    };

vm.createContext(sandbox);
if (vm.isContext(sandbox)) console.log('contextualized');

vm.runInContext('count1++; counter=true;',sandbox,
                {filename: 'context.vm'});

console.log(util.inspect(sandbox));
