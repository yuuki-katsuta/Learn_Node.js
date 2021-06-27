/**
 1. "sample.txt"を返却する
 2. POSTリクエストの場合、リクエストボディーを返す
   その他の場合、"sample.txt"を返却する
 */

const http = require('http');
//ファイルを返却するからFileSystemとpathを利用
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  //リクエスト情報を分析
  console.log(
    `[${new Date().toISOString()}]` +
      `${req.method}` +
      `${req.url}` +
      `${req.headers['user-agent']}`
  );
  if (req.method === 'POST') {
    req.pipe(res); //requestもストリームなのでpipeでつなぐことができる（リクエスト情報をレスポンスとして返す）
  } else {
    //ファイルをストリームで非同期で読み取る
    const reader = fs.createReadStream(
      path.join(__dirname, 'sample.txt'), //文字列の結合(ディレクトリの中のsample.txtを指定)
      'utf8'
    );
    reader.pipe(res);
    // resはストリームなのでpipe()する(読み取った情報をresponseに書き込む)
    // pipe() メソッドは読み取り可能なストリームと書き込み可能なストリームを関連付けるもので、後はよしなにデータを渡す
  }
});

server.listen(3000);
