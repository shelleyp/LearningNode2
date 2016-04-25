'use strict';

const util = require('util');
const eventEmitter = require('events').EventEmitter;
const fs = require('fs');

class InputChecker extends eventEmitter {

   constructor(name, file) {
      super()
      this.name = name;

      this.writeStream = fs.createWriteStream('./' + file + '.txt',
         {'flags' : 'a',
          'encoding' : 'utf8',
          'mode' : 0o666});
      }

   check (input) {
      let command = input.toString().trim().substr(0,3);
      if (command == 'wr:') {
        this.emit('write',input.substr(3,input.length));
      } else if (command == 'en:') {
        this.emit('end');
      } else {
        this.emit('echo',input);
      }
   }
};

exports.InputChecker = InputChecker;
