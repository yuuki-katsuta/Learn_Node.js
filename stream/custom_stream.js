// 1. ランダム文字列を生成するモジュール RandomString を作成
// 2. ランダム文字列を読み取る CustomReadableStream を作成

const CustomReader = require('../customreader');
//クラスなのでインスタンス化
const reader = new CustomReader();

reader.on('data', (chunk) => {
  console.log(chunk);
});
reader.resume();

// 前提
//   以下の2モジュールが準備されていること
//   - randomstring.js
//   - customreader.js

// 課題
//   1. 受け取ったストリームをコンソールに書き出す CustomWritableStream を作成

const CustomWriter = require('./customwriter');
const writer = new CustomWriter();

reader.pipe(writer); //Pipeで読み取りと書き込みを結合 読み取ったデータ(chunk)をコンソールに出力
reader.resume();
