console.log("TEST Array.prototype.find");

//The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

console.log("CASE find flavor in cake");

var cakeFlavor = [
  "strawberry",
  "blueberry",
  "chocolate",
  "cream",
  "lemon",
  "red velvet",
];

console.log(
  cakeFlavor.find(function (flavor) {
    return flavor === "lemon";
  })
);
console.log(
  cakeFlavor.find(function (flavor) {
    return flavor === "oreo";
  })
);
