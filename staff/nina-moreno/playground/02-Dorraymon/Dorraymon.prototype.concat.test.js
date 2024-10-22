function Dorraymon() {
  this.length = 0;
}

Dorraymon.prototype.concat = function (secondDorraymon) {
  var newDorraymon = new Dorraymon();
  var i = 0;
  for (i; i < this.length; i++) {
    newDorraymon[i] = this[i];
  }
  for (var j = 0; j < secondDorraymon.length; j++) {
    newDorraymon[i] = secondDorraymon[j];
    i++;
  }
  newDorraymon.length = this.length + secondDorraymon.length;
  return newDorraymon;
};
console.log("TEST Dorraymon.prototype.concat");

//The concat() method of Array instances is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

console.log("CASE concat array1 and array2");

var first = new Dorraymon();
first[0] = 1;
first[1] = 2;
first[2] = 3;
first.length = 3;
var second = new Dorraymon();
second[0] = 4;
second[1] = 5;
second[2] = 6;
second.length = 3;
var third = first.concat(second);

console.log(third);
//Expected output [1,2,3,4,5,6]
//END
