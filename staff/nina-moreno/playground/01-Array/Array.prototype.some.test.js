console.log("TEST Array.prtotype.some");

//The some() method of Array instances tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

console.log("CASE brand exist");

var cars = [
  { brand: "ferrari", model: "enzo" },
  { brand: "fiat", model: "punto" },
  { brand: "seat", model: "ibiza" },
];

var check = cars.some(function (car) {
  return car.brand === "fiat";
});

console.log(check);

var check = cars.some(function (car) {
  return car.brand === "ford";
});
console.log(check);
