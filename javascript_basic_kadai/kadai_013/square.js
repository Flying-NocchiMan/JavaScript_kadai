// function squareAndPrintResult(number) {
//   const squared = number * number;
//   // console.log("計算結果:", squared);
// }

// // 関数を呼び出すために、以下の行を追加します。
// squareAndPrintResult(5); // この行で関数を呼び出します。
// console.log(squared());


function squareNumber(number) {
  const squared = number * number;
  return squared; // 二乗した結果を戻り値として返す
}

// 関数を呼び出し、計算結果をコンソールに出力
const result = squareNumber(5);
console.log("計算結果:", result);
