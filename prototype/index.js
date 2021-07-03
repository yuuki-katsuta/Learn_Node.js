var util = {};

var Animal = function () {
  this.message = 'hoge';
};

//Animalのプロトタイプに関数を追加
Animal.prototype = {
  age: 10,
  message: '.....',
  say: function () {
    return this.message;
  },
};

var Dog = function () {
  this.message = 'わんわん';
};
//Dogのプロトタイプに対してAnimalのプロトタイプを継承
Dog.prototype = Animal.prototype;

var dog = new Dog();

console.log(dog.say()); //わんわん
console.log(dog.message); //わんわん

const a = new Animal();
console.log(a.say()); //hoge
//インスタンスはプロトタイプオブジェクトを__proto__に保存する
console.log(a.__proto__);
