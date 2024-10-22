console.log("TEST Array.prototype.pop");

//The pop() method of Array instances removes the last element from an array and returns that element. This method changes the length of the array.

console.log("CASE remove the last element grape and returns it");

var fruits = ["apple", "pear", "peach", "melon", "banana", "berry", "grape"];
console.log(fruits.pop());
//Expected output "grape"

console.log(fruits);
// Expected output ["apple", "pear", "peach", "melon", "banana", "berry"]
