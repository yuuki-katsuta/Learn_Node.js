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

/**
1. ファイルを非同期的に読み込んでコンソール表示する
2. 読み込んだファイルを別名で非同期保存する
3. 2で作成したプログラムをPromise化してネストを削減する(async/await使わない)
4. 2で作成したプログラムをPromise化してネストを削減する(async/await使う)
 */

fs.readFile(path.join(__dirname, 'sample.txt'), 'utf-8', (err, data) => {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log(data);

  //書き込み(第一引数に書き込み先のファイル名)
  fs.writeFile(
    path.join(__dirname, 'sample-copy2.txt'),
    data,
    'utf-8',
    (err) => {
      if (err) {
        console.log(err.message);
        return;
      }
      console.log('ok');
    }
  );
});

//Promis化
const util = require('util');

//まずPromis可する
//readFile, writeFileはPromisのオブジェクトとなっている;
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

readFile(path.join(__dirname, 'sample.txt'), 'utf-8')
  .then((data) => {
    writeFile(path.join(__dirname, 'sample-copy3.txt'), data, 'utf-8');
  })
  .then(() => {
    console.log('ok');
  })
  .catch((err) => {
    console.log(err.message);
  });

// async,awaitを使う

const readFile2 = util.promisify(fs.readFile);
const writeFile2 = util.promisify(fs.writeFile);

(async function () {
  try {
    const data = await readFile2(path.join(__dirname, 'sample.txt'), 'utf-8');
    await writeFile2(path.join(__dirname, 'sample-copy4.txt'), data, 'utf-8');
    console.log('ok');
  } catch (err) {
    console.log(err.message);
  }
})();
