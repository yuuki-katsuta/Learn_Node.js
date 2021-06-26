// 1. ランダム文字列を生成するモジュール RandomString を作成
// 2. ランダム文字列を読み取る CustomReadableStream を作成

const CustomReader = require('./customreader');
const reader = new CustomReader();

reader.on('data', (chunk) => {
  console.log(chunk);
});
reader.resume();
