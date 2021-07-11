const express = require('express');
const app = express();

// ejsを利用
app.set('view engine', 'ejs');

app.use('/public', express.static(__dirname + '/public')); //静的ファイル配信

app.use('/', require('./routes/index.js')); // ルーティングをモジュール化して利用

app.listen(3000);
