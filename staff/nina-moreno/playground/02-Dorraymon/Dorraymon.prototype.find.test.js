function Dorraymon() {
  this.length = 0;
}

Dorraymon.prototype.find = function (condition) {
  for (var i = 0; i < this.length; i++) {
    if (condition(this[i])) return this[i];
  }
  return "undefined";
};

console.log("TEST Dorraymon.prototype.find");

//The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

console.log("CASE find flavor in cake");

var cakeFlavor = new Dorraymon();
cakeFlavor[0] = "strawberry";
cakeFlavor[1] = "blueberry";
cakeFlavor[2] = "chocolate";
cakeFlavor[3] = "cream";
cakeFlavor[4] = "lemon";
cakeFlavor[5] = "red velvet";
cakeFlavor.length = 6;

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
