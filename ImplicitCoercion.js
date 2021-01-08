// 暗黙的な型変換

console.log(1 == "1"); // => true // "1"を数値の1へと暗黙的に型変換してから比較する
console.log(1 + true); // => 2

// 厳密等価演算子を使う: 暗黙的な型変換をせずに比較をしてくれる
console.log(1 === "1"); // => false
console.log(1 === ["1"]); // => false
