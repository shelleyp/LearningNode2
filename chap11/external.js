
var concatArray = function(str, arry) {
  return arry.map(function(element) {
       return str + ' ' + element;
  });
}

exports.concatArray = concatArray;

