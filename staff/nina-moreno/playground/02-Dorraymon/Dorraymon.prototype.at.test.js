function VehicleGroup() {
  this.length = 0;
}
VehicleGroup.prototype.at = function (index) {
  if (index < 0) {
    var newIndex = this.length + index;
    return this[newIndex];
  } else return this[index];
};
console.log("TEST Dorraymon.prototype.at");

console.log("CASE get car at index");

var cars = new VehicleGroup();
cars[0] = "lambo";
cars[1] = "f350";
cars[2] = "911";
cars[3] = "m5";
cars[4] = "hummer";
cars.length = 5;
//var car = cars.at(3);
console.log(cars);
//console.log(cars.length);

// m5

/*console.log("CASE get function ay index 2");

var funs = Vehicle;
funs[0] = function () {
  return "Zero";
};
funs[1] = function () {
  return "One";
};
funs[2] = function () {
  return "Two";
};
funs[3] = function () {
  return "Three";
};
funs.length = 4;
var fun = funs.at(2);
console.log(fun());
//Two

console.log("CASE get item at index -2, -3, -1");

var cart = new Vehicle();
cart[0] = { brand: "Adidas", model: "Niza", size: 43, price: 70, quantity: 2 };
cart[1] = { brand: "Puma", model: "Gatito", size: "L", price: 20, quantity: 3 };
cart[2] = { brand: "Nike", model: "Chachi", size: 44, price: 15, quantity: 6 };
cart.length = 3;
var item = cart.at(-2);
console.log(item);
// { brand: 'Puma', model: 'Gatito', size: 'L', price: 20, quantity: 3 }
var item = cart.at(-3);
console.log(item);
// { brand: 'Adidas', model: 'Niza', size: 43, price: 70, quantity: 2 }
var item = cart.at(-1);
console.log(item);
// { brand: 'Nike', model: 'Chachi', size: '44', price: 15, quantity: 6 }

console.log("CASE get item at index -10");

var cart = new Vehicle();
cart[0] = { brand: "Adidas", model: "Niza", size: 43, price: 70, quantity: 2 };
cart[1] = { brand: "Puma", model: "Gatito", size: "L", price: 20, quantity: 3 };
cart[2] = {
  brand: "Nike",
  model: "Chachi",
  size: "44",
  price: 15,
  quantity: 6,
};
cart.length = 3;
var item = cart.at(-10);
console.log(item);
// undefined

console.log("CASE get item at index 10");

var cart = new Vehicle();
cart[0] = { brand: "Adidas", model: "Niza", size: 43, price: 70, quantity: 2 };
cart[1] = { brand: "Puma", model: "Gatito", size: "L", price: 20, quantity: 3 };
cart[2] = {
  brand: "Nike",
  model: "Chachi",
  size: "44",
  price: 15,
  quantity: 6,
};
cart.length = 3;
var item = cart.at(10);
console.log(item);
// undefined
*/
