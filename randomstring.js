module.exports = (max = 10) => {
  //ランダム文字列を作成
  let data = [];
  const original =
    '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const length = original.length;
  for (let i = 0; i < max; i++) {
    data[i] = original[Math.floor(Math.random() * length)];
    //Math.random()は0以上1未満の数値を返す
    //Math.floor() 関数は与えられた数値以下の最大の整数を返す
  }
  return data.join('');
  //配列の全要素を順に連結した文字列を新たに作成して返す
};
