function Dorraymon() {
  this.length = 0;
}

Dorraymon.prototype.lastIndexOf = function (index) {
  for (var i = this.length - 1; i >= 0; i--) {
    if (this[i] === index) {
      return i;
    }
  }
  return -1;
};
console.log("TEST Dorraymon.prototype.lasIndexOf");

//The lastIndexOf() method of Array instances returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex

console.log("CASE find the index of the last position of teal and pink");

var colours = new Dorraymon();
colours[0] = "red";
colours[1] = "purple";
colours[2] = "teal";
colours[3] = "mint";
colours[4] = "coral";
colours[5] = "teal";
colours.length = 6;
console.log(colours.lastIndexOf("teal"));
//Expected output : 5
console.log(colours.indexOf("pink"));
//Expected output : -1
//END
