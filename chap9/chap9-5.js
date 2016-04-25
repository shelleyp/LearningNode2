function NewObj(name) {
   this.name = name;
}

NewObj.prototype.doLater = function() {
   var self = this;
   setTimeout(function() {
      console.log(self.name);
   }, 1000);
};

var obj = new NewObj('shelley');
obj.doLater();
