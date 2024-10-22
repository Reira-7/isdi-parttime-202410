function Dorraymon() {
  this.length = 0;
}

Dorraymon.prototype.indexOf = function (index) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] === index) {
      return i;
    }
  }
  return -1;
};

console.log("TEST Dorraymon.prototype.indexOf");

//The indexOf() method of Array instances returns the first index at which a given element can be found in the array, or -1 if it is not present.

console.log("CASE find the index of teal and pink");

var colours = new Dorraymon();
colours[0] = "red";
colours[1] = "purple";
colours[2] = "teal";
colours[3] = "mint";
colours[4] = "coral";
colours.length = 5;
console.log(colours.indexOf("teal"));
//Expected output : 2
console.log(colours.indexOf("pink"));
//Expected output : -1
//END
