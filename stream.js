// サンプルテキストをストリームで読み込み

const path = require('path');
const fs = require('fs');

//まず,ReadableStreamを作る
const reader = fs.createReadStream(path.join(__dirname, 'sample.txt'), 'utf-8');

//dataイベントで部分的なデータを格納する変数を定義
let data = '';

//イベント(data,end)発火時の処理を記述
//小さなデータ一個分読み込んだときに発生するイベントが data イベント
reader.on('data', (chunk) => {
  data += chunk;
});
//すべてのデータの読み込みが終わったらendイベント発生
reader.on('end', () => {
  console.log(data);
});
reader.resume(); //読み取り開始
