const Clock = require('./clock');
let i = 0;
const clock = new Clock();

//onメソッドでtickイベント発火時の処理
clock.on('tick', (message) => {
  console.log(++i, message);
  if (i >= 10) clock.stop();
});
//clock.start();

/**
 1. "C:\\sample\index.html" というパスから以下の文字列を取り出す
  1) ディレクトリ名
  2) ファイル名
  3) 拡張子名
 2. "C:\\sample" と "index.html" をパスとして文字列結合
 3. "C:\\sample\lib\..\index.html" というパスを正規化
*/
const path = require('path');
const filepath = './sample/index.js';

console.log(path.dirname(filepath)); //ディレクトリ名
console.log(path.basename(filepath)); //ファイル名
console.log(path.extname(filepath)); //拡張子名の取得

console.log(path.join('./sample', 'index.js')); //文字列の結合

console.log(path.normalize('C:\\samplelib..index.html')); //文字列の正規化
