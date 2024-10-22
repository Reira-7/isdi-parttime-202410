function Dorraymon() {
  this.length = 0;
}

Dorraymon.prototype.pop = function () {
  this.length--;
  var lastElement = this[this.length];
  delete this[this.length];
  return lastElement;
};

console.log("TEST Dorraymon.prototype.pop");

//The pop() method of Array instances removes the last element from an array and returns that element. This method changes the length of the array.

console.log("CASE remove the last element grape and returns it");

var fruits = new Dorraymon();
fruits[0] = "apple";
fruits[1] = "pear";
fruits[2] = "peach";
fruits[3] = "melon";
fruits[4] = "banana";
fruits[5] = "berry";
fruits[6] = "grape";
fruits.length = 7;
console.log(fruits.pop());
//Expected output "grape"

console.log(fruits);
// Expected output ["apple", "pear", "peach", "melon", "banana", "berry"]

console.log("CASE extract last item from cart");

var cart = new Dorraymon();
cart[0] = { brand: "cocacola", title: "bottle 1.5l" };
cart[1] = { brand: "azucarera", title: "package 1kg" };
cart[2] = { brand: "eco", title: "12 eggs" };
cart[3] = { brand: "casa tarradellas", title: "Pizza 4 cheeses" };
cart.length = 4;
console.log(cart.pop());
//Expected output {brand: "casa tarradellas", title: "Pizza 4 cheeses"}

//END
