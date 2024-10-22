console.log("TEST Array.prototype.lasIndexOf");

//The lastIndexOf() method of Array instances returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex

console.log("CASE find the index of the last position of teal and pink");

var colours = ["red", "purple", "teal", "mint", "coral", "teal"];
console.log(colours.lastIndexOf("teal"));
//Expected output : 5
console.log(colours.lastIndexOf("pink"));
//Expected output : -1
