(function () {
  var module = require('./module-1.js');
  module();
})();

(function () {
  var module = require('./module-2.js');
  console.log(module);
})();

(function () {
  var module = require('./module-3.js');
  console.log(module.square());
})();

(function () {
  var Square = require('./module-4.js');
  var obj = new Square();
  console.log(obj.area());
  //オブジェクトのインスタンスは__proto__にprototypeオブジェクトを保存する
})();

(function () {
  var { Square, Triangle } = require('./module-5.js');
  var obj1 = new Square();
  console.log(obj1.area());
  var obj2 = new Triangle();
  console.log(obj2.area());
})();
