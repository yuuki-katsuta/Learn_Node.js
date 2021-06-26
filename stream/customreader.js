// stream.Readableを継承して実装
const { Readable } = require('stream');
const randomstring = require('./randomstring');

const data = randomstring();

var CustomReader = class extends Readable {
  constructor(options) {
    super(options || { encoding: 'utf8' }); //なにもオプションがなかった場合エンコーディング
    this._current = 0;
  }

  _read(size) {
    //sizeはストリームにおいて小分けにするサイズ
    var start = this._current;
    var end = start + size < data.length ? start + size : data.length;
    var chunk;

    try {
      //データから一部を取ってきてそれをpushする
      chunk = data.slice(start, end);
    } catch (error) {
      process.nextTick(() => {
        this.emit('error', error); // エラーイベント発生
      });
      return;
    }

    this.push(chunk);

    if (start + size < data.length) {
      // start + size < data.lengthならまだ続きがある
      this._current = end;
    } else {
      //終了判定
      this.push(null);
    }
  }
};

module.exports = CustomReader;
