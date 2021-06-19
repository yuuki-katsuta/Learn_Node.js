/**
 1. ファイルを同期的に読み込んでコンソール表示する
 2. 読み込んだファイルを別名で保存する
 */

//ファイル読み書きにはFileSystemモジュールを使う
const fs = require('fs');
const path = require('path');

//readFileSyncで同期的に読み込む
//joinで文字列の結合
//戻り値は読み取ったデータ
const data = fs.readFileSync(path.join(__dirname, 'sample.txt'), 'utf-8');
console.log(data);

fs.writeFileSync(path.join(__dirname, 'sample-copy.txt'), data, 'utf-8');
