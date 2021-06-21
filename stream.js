// // サンプルテキストをストリームで読み込み

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

// 1. 任意の文字列をテキストファイル出力する
// 2. 読み込んだファイルをパイプして出力する

//まずwritableStreamを作成する
const writer = fs.createWriteStream(
  path.join(__dirname, 'created.txt'),
  'utf8'
);
writer.end('hello, world'); // hello,world と出力されたcreated.txtが作成される

const reader2 = fs.createReadStream(path.join(__dirname, 'sample.txt'), 'utf8');
const writer2 = fs.createWriteStream(
  path.join(__dirname, 'sample-copy5.txt'),
  'utf8'
);
reader2.pipe(writer2); //pipeで次の処理へデータを渡す
reader2.resume(); //読み込み開始(sample.txtの内容を渡し、それをsample-copy5.txtへ書き込む)
