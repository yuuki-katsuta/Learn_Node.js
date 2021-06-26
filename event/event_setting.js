/**
 EventEmitterクラスを利用して学習内容を確認しましょう。

1. 以下のようなプログラムを実装してみましょう。
  a. on でコンソールにメッセージ表示するイベント処理 ontick を追加
      イベント処理内で自分自身（イベント処理）を削除
  b. emit() を2回呼んで、2回目が実行されないことを確認
  ※ off でイベント削除できることを確認

2. 以下のようなプログラムを実装してみましょう。
  a. once でコンソールにメッセージ表示するイベント処理 ontick を追加
  b. emit() を 2度呼んで、2回目が実行されないことを確認
  ※ once の場合、一度だけ実行されることを確認

3. 以下のようなプログラムを実装してみましょう。
  a. function で定義したイベント処理の this をコンソール出力
     同様に アロー関数で定義したイベント処理の this をコンソール出力
  ※ function と アロー関数 で this が異なることを確認

 */
const EventEmitter = require('events');
const e = new EventEmitter();
const x = new EventEmitter();

const ontick = function () {
  console.log('発火');
  // e.off('event', ontick); //イベント処理の削除
};

// e.on('event', ontick); //イベント eventが実行されたらontickが実行される
e.once('event', ontick); //onceで一度だけ実行される
e.emit('event'); //emitでイベント発火
e.emit('event');

x.on('fire', function () {
  console.log('function:', this);
});
x.on('fire', () => {
  console.log('allow', this);
  //アロー関数の場合、スコープに this 値がない場合、その一つ外側のスコープで this 値を探す
});

x.emit('fire');
