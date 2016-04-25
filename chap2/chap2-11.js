var timer = setTimeout(function(name) {
             console.log('Hello ' + name);
           }, 30000, 'Shelley');

timer.unref();

console.log("waiting on timer...");
