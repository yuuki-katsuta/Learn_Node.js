var express = require('express');
var app = express();

// use()でミドルウェアの利用
// /publicに対して/public以下のファイルを返却する
app.use('/public', express.static(__dirname + '/public')); //静的ファイルを返却する

app.listen(3000);
