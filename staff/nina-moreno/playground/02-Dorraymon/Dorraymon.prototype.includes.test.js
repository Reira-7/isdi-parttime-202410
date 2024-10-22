function Dorraymon() {
  this.length = 0;
}

Dorraymon.prototype.includes = function (value) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] === value) {
      return true;
    }
  }
  return false;
};

console.log("TEST Dorraymon.prototype.includes");

//The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.

console.log("CASE verify if clothes includes socks and hat");

var clothes = new Dorraymon();
clothes[0] = "coat";
clothes[1] = "tshirt";
clothes[2] = "trousers";
clothes[3] = "socks";
clothes[4] = "jeans";
clothes.length = 5;
console.log(clothes.includes("socks"));
// Expected output: true

console.log(clothes.includes("hat"));
// Expected output: false
