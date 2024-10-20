//The pop() method of Array instances removes the last element from an array and returns that element. This method changes the length of the array.
console.log(".pop() method");

var fruits = ["apple", "pear", "peach", "melon", "banana", "berry", "grape"];
console.log(fruits.pop());
//Expected output "grape"

console.log(fruits);
// Expected output ["apple", "pear", "peach", "melon", "banana", "berry"]
//END

//START
//The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.
console.log(".includes() method");

var clothes = ["coat", "tshirt", "trousers", "socks", "jeans"];
console.log(clothes.includes("socks"));
// Expected output: true
//END

//START
//The indexOf() method of Array instances returns the first index at which a given element can be found in the array, or -1 if it is not present.
console.log(".indexOf() method");
var colours = ["red", "purple", "teal", "mint", "coral"];
console.log(colours.indexOf("teal"));
//Expected output : 2
//END

//START
//The lastIndexOf() method of Array instances returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex
console.log(".lastIndexOf() method");
var colours = ["red", "purple", "teal", "mint", "coral", "teal"];
console.log(colours.lastIndexOf("teal"));
//Expected output : 5
//END

//START
//The concat() method of Array instances is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
console.log(".concat() method");

var array1 = [1, 2, 3];
var array2 = [4, 5, 6];
var array3 = array1.concat(array2);

console.log(array3);
//Expected output [1,2,3,4,5,6]
//END

//START
//The reverse() method of Array instances reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first. In other words, elements order in the array will be turned towards the direction opposite to that previously stated.
console.log(".reverse() method");

var array1 = ["one", "two", "three"];
console.log(array1);
// Expected output ["one", "two", "three"]
var reversed = array1.reverse();
console.log(reversed);
// Expected output ["three", "two", "one"]
//END
