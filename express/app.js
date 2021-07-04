const express = require('express');
const app = express();

//ミドルウェアを利用(アプリケーションレベルで利用)
app.use(require('./middleware/logger'));

// GETメソッドでルートにアクセスしたときの処理
app.get('/', (req, res) => {
  res.status(200).send('hello world.');
  /**
  ↓と同じ実装
  res.writeHead(200);
  res.write('hello, world');

  「writeHead」は、responseオブジェクトのメソッドで、ヘッダー情報をレスポンスに書き出すもの。第１引数にはステータスコードを指定し、第２引数にヘッダー情報を連想配列でまとめたものを指定。
  コンテンツの書き出しを行なっているのがresponseオブジェクトの「write」
  */
});
app.listen(3000);

// res.send()	さまざまなタイプのレスポンスを送信します。
// status()でステータスコードを設定できる
