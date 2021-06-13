const Clock = require('./clock');
let i = 0;
const clock = new Clock();

//onメソッドでtickイベント発火時の処理
clock.on('tick', (message) => {
  console.log(++i, message);
  if (i >= 10) clock.stop();
});
clock.start();
