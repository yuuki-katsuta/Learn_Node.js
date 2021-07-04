//継承を実現する(あまり推奨されていない...)

var util = require('util');

var Animal = function () {
  this.age = 12;
};

Animal.prototype.message1 = 'qwert';

Animal.prototype.say = function () {
  console.log(this.message);
};

// console.log(Animal.prototype);
// console.log(Animal.prototype.message);
// const a = new Animal();
// console.log(a.__proto__.message);

// console.log(a.prototype.message); error

var Dog = function () {
  Animal.call(this); //親クラスのコンストラクターを呼び出す (age = 12)
  this.message = 'わんわん';
};

Dog.prototype.sayHello = function () {
  console.log(this);
};

//継承
util.inherits(Dog, Animal); //(子クラス,スーパークラス)

var dog = new Dog();
console.log(dog.age); // 22
dog.sayHello(); // Dog { age: 22, message: 'わんわん' }
dog.say(); // わんわん
console.log(dog.message1); //qwert
