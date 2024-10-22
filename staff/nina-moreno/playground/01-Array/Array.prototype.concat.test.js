console.log("TEST Array.prototype.concat");

//The concat() method of Array instances is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

console.log("CASE concat array1 and array2");

var array1 = [1, 2, 3];
var array2 = [4, 5, 6];
var array3 = array1.concat(array2);

console.log(array3);
//Expected output [1,2,3,4,5,6]
