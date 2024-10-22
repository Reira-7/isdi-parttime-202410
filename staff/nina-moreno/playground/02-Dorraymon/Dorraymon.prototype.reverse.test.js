function Dorraymon() {
  this.length = 0;
}

Dorraymon.prototype.reverse = function (reverse) {
  var reversed = new Dorraymon();
  var index = 0;
  for (var i = this.length - 1; i >= 0; i--) {
    reversed[index] = this[i];
    index++;
  }
  reversed.length = this.length;
  return reversed;
};
console.log("TEST Dorraymon.prototype.reverse");

//The reverse() method of Array instances reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first. In other words, elements order in the array will be turned towards the direction opposite to that previously stated.

console.log("CASE reverse the positions of one, two and three");
var array1 = new Dorraymon();
array1[0] = "one";
array1[1] = "two";
array1[2] = "three";
array1.length = 3;
console.log(array1);
// Expected output ["one", "two", "three"]
var reversed = array1.reverse(array1);
console.log(reversed);
// Expected output ["three", "two", "one"]
//END
