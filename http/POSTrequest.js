/**
 クライアント側
 1. サーバーへ"Hello World !"をPOSTリクエストし、レスポンスをコンソール表示する
 2. エラー処理を実装し、エラー内容をコンソール表示する
 ※サーバーは以前作成したものを利用する (response.jsを利用)
 */

const http = require('http');
const data = 'hello, world';
const url = 'http://localhost:3000/';
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(data),
  },
};
const req = http.request(url, options, (res) => {
  //レスポンスが帰ってきたら実行
  res.pipe(process.stdout);
});
//エラー処理実装
req.on('error', (err) => {
  console.log(err.message);
});
req.end(data); //送信するデータをendの中に書き込む
