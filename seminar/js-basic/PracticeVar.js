// 再定義ができてしまう
var x = 1;
console.log(x); // undefined

var x = 2;
console.log(x); // 変数の再定義ができてしまう

/* --- --- --- */

// 巻き上げが起こる
console.log(x2); // 宣言をする前に参照しているが、エラーにならない
var x2 = "hoge";

// 動きとしては以下のようになっている
// var x2;
// console.log(x2);
// x2 = "hoge";

// let を使うとこういった挙動はなくなる
// 下記は宣言前に参照しているので、エラーになる
// console.log(x3);
// let x3 = "hoge";

/* 
 ECMASCriptでは後方互換性を重視しているので、var自体の挙動は変えずに
 const, let が追加された。
*/
