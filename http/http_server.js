// 'hello,worldを返すサーバーを作成'

/**
  const http = require('http');
  const server = http.createServer((req, res) => {
    res.end('hello,world');
  });
  server.listen(3000);
*/

const http = require('http');
var server = http.createServer();
server.on('request', (request, response) => {
  var data = '';

  // リクエストの分析
  console.log(`METHOD : ${request.method}`);
  console.log(`URL    : ${request.url}`);
  console.log(`HEADER : `);
  for (let key in request.headers) {
    console.log(`  ${key} : ${request.headers[key]}`);
  }

  //リクエストはReadablestreamを継承している
  //イベント(data,end)発火時の処理を記述
  //小さなデータ一個分読み込んだときに発生するイベントが data イベント
  request.on('data', (chunk) => {
    data += chunk;
  });
  //endイベント生成
  request.on('end', () => {
    console.log(data);
  });

  // レスポンスの作成
  //すべてのデータの読み込みが終わったらendイベント発生
  response.end('OK');
});
server.listen(3000);
