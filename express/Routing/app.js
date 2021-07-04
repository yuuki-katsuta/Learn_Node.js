const express = require('express');
const app = express();

// home/index にGETリクエストを行うと、status200でOKというレスポンスを返す処理
// app.get('/home/index', (req, res) => {
//   res.status(200).send('OK');
// });

//名前付きパラメータ
// app.get('/user/:id', (req, res) => {
//   console.log(req.params.id); //pathのidを取得できる
//   res.status(200).send(`idは、${req.params.id}`);
// });

// '/user'でuserというパスの配下でのみ利用できるミドルウェア
app.use('/user', require('./user'));

app.listen(3000);
