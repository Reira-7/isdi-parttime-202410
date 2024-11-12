class Dorraymon {
  cosntructor() {
    this.length = 0;
  }

  forEach(condition) {
    for (var i = 0; i < this.length; i++) {
      condition(this[i]);
    }
  }
}

console.log("TEST Dorraymon.prototype.forEach");

//The forEach() method of Array instances executes a provided function once for each array element.

console.log("CASE write every flavor in cake");

var cakeFlavor = new Dorraymon();
cakeFlavor[0] = "strawberry";
cakeFlavor[1] = "blueberry";
cakeFlavor[2] = "chocolate";
cakeFlavor[3] = "cream";
cakeFlavor[4] = "lemon";
cakeFlavor[5] = "red velvet";
cakeFlavor.length = 6;

cakeFlavor.forEach(function (flavor) {
  console.log(flavor);
});
