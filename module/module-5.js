var Square = function (width = 10, height = 10) {
  this.width = width;
  this.height = height;
};

Square.prototype.area = function () {
  return this.width * this.height;
};

var Triangle = function (base = 10, height = 10) {
  this.base = base;
  this.height = height;
};

Triangle.prototype.area = function () {
  return this.base * this.height / 2.0;
};

module.exports = {
  Square: Square,
  Triangle: Triangle
};