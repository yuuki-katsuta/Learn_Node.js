var EventEmitter = require('events').EventEmitter;
var util = require('util');

var Animal = function () {
  this.age = 11;
  EventEmitter.call(this); //親のコンストラクターを呼び出す
};
util.inherits(Animal, EventEmitter); //継承

Animal.prototype.message = 'qwert';

Animal.prototype.say = function () {
  console.log(this.message);
  // sayというイベントを実行
  this.emit('say', this.message); //this.message は引数
};

var Dog = function () {
  Animal.call(this);
  this.message = 'わんわん';
};
util.inherits(Dog, Animal); //継承

var dog = new Dog();
//sayイベントに対してリスナーを登録
dog.on('say', function (message) {
  console.log(`「${message}」と叫んだ`);
  console.log(this); //メソッドとして呼ばれた場合その所属するオブジェクトを示す
});
dog.say();
