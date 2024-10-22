console.log("TEST Array.prototype.reverse");

//The reverse() method of Array instances reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first. In other words, elements order in the array will be turned towards the direction opposite to that previously stated.

console.log("CASE reverse the positions of one, two and three");

var array1 = ["one", "two", "three"];
console.log(array1);
// Expected output ["one", "two", "three"]
var reversed = array1.reverse();
console.log(reversed);
// Expected output ["three", "two", "one"]
