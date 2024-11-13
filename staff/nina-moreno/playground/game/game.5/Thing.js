function Thing(container) {
  this.x = 0;
  this.y = 0;

  this.container = container;
  this.container.style.position = "absolute";
}

// Thing.prototype = Object.create(Object.prototype)
// Thing.prototype.constructor = Thing

Thing.prototype.setSize = function (width, height) {
  this.container.style.width = width + "px";
  this.container.style.height = height + "px";
};

Thing.prototype.setXY = function (x, y) {
  this.x = x;
  this.y = y;

  this.container.style.left = this.x + "px";
  this.container.style.top = this.y + "px";
};

Thing.prototype.setX = function (x) {
  this.setXY(x, this.y);
};

Thing.prototype.setY = function (y) {
  this.setXY(this.x, y);
};

Thing.prototype.add = function (thing) {
  this.container.appendChild(thing.container);
};
