/**
 クライアント側
 1. サーバーへGETリクエストし、レスポンスをコンソール表示する
 ※サーバーは以前作成したものを利用する
*/

const http = require('http');
const url = 'http://localhost:3000/';
const options = {
  method: 'GET',
};

const req = http.request(url, options, (res) => {
  res.pipe(process.stdout); //コンソール表示
});

//ストリームなのでendしないと実行されない
req.end();
