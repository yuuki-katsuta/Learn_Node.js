var Square = function (width = 10, height = 10) {
  this.width = width;
  this.height = height;
};

Square.prototype.width = 10;

Square.prototype.height = 10;

Square.prototype.area = function () {
  return this.width * this.height;
};

module.exports = Square;
