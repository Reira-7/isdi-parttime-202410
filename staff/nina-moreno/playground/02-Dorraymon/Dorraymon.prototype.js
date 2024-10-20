//The pop() method of Array instances removes the last element from an array and returns that element. This method changes the length of the array.
console.log(".pop method() in a Dorraymon");

function Dorraymon() {
  this.length = 0;
}

Dorraymon.prototype.pop = function () {
  this.length--;
  var lastFruit = this[this.length];
  delete this[this.length];
  return lastFruit;
};

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
//END

//START
//The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.
console.log(".includes() method in a Dorraymon");

Dorraymon.prototype.includes = function (value) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] === value) {
      return true;
    }
  }
  return false;
};

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
//END

//START
//The indexOf() method of Array instances returns the first index at which a given element can be found in the array, or -1 if it is not present.
console.log(".indexOf() method in a Dorraymon");
Dorraymon.prototype.indexOf = function (index) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] === index) {
      return i;
    }
  }
  return -1;
};

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

//START
//The indexOf() method of Array instances returns the first index at which a given element can be found in the array, or -1 if it is not present.
console.log(".lastIndexOf() method in a Dorraymon");
Dorraymon.prototype.lastIndexOf = function (index) {
  for (var i = this.length - 1; i >= 0; i--) {
    if (this[i] === index) {
      return i;
    }
  }
  return -1;
};

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

//START
//The concat() method of Array instances is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
console.log(".concat() method in a Dorraymon");

Dorraymon.prototype.concat = function (secondDorraymon) {
  var newDorraymon = new Dorraymon();
  var i = 0;
  for (i; i < this.length; i++) {
    newDorraymon[i] = this[i];
  }
  for (var j = 0; j < secondDorraymon.length; j++) {
    newDorraymon[i] = secondDorraymon[j];
    i++;
  }
  newDorraymon.length = this.length + secondDorraymon.length;
  return newDorraymon;
};

var first = new Dorraymon();
first[0] = 1;
first[1] = 2;
first[2] = 3;
first.length = 3;
var second = new Dorraymon();
second[0] = 4;
second[1] = 5;
second[2] = 6;
second.length = 3;
var third = first.concat(second);

console.log(third);
//Expected output [1,2,3,4,5,6]
//END

//START
//The reverse() method of Array instances reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first. In other words, elements order in the array will be turned towards the direction opposite to that previously stated.
console.log(".reverse() method in a Dorraymon");

Dorraymon.prototype.reverse = function (reverse) {
  var reversed = new Dorraymon();
  var index = 0;
  for (var i = this.length - 1; i >= 0; i--) {
    reversed[index] = this[i];
    index++;
  }
  reversed.length = this.length;
  return reversed;
};

var array1 = new Dorraymon();
array1[0] = "one";
array1[1] = "two";
array1[2] = "three";
array1.length = 3;
console.log(array1);
// Expected output ["one", "two", "three"]
var reversed = array1.reverse(array1);
console.log(reversed);
// Expected output ["three", "two", "one"]
//END
