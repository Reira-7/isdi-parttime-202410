class Dorraymon {
  constructor() {
    this.length = 0;
  }

  some(condition) {
    for (var i = 0; i < this.length; i++) {
      if (condition(this[i])) return true;
    }
    return false;
  }
}

console.log("TEST Dorraymon.prototype.some");

//The some() method of Array instances tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

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
  cakeFlavor.some(function (flavor) {
    return flavor === "lemon";
  })
);
console.log(
  cakeFlavor.some(function (flavor) {
    return flavor === "oreo";
  })
);
