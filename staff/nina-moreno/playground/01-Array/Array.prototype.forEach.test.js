console.log("TEST Array.prtotype.forEach");

//The forEach() method of Array instances executes a provided function once for each array element.

console.log("CASE brand exist");

var cars = [
  { brand: "ferrari", model: "enzo" },
  { brand: "fiat", model: "punto" },
  { brand: "seat", model: "ibiza" },
];

cars.forEach(function (car) {
  console.log(car);
});
