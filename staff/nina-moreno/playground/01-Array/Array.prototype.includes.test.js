console.log("TEST Array.prototype.includes");

//The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.

console.log("CASE verify if clothes includes socks and hat");

var clothes = ["coat", "tshirt", "trousers", "socks", "jeans"];
console.log(clothes.includes("socks"));
// Expected output: true
console.log(clothes.includes("hat"));
// Expected output: false
