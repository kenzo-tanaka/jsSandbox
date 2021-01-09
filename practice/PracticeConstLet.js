/* 
 ECMASCriptでは後方互換性を重視しているので、var自体の挙動は変えずに
 const, let が追加された。
*/

// const data = "hoge";
// data = "hoge2"; // 値の再代入はできない

let data2 = "hoge";
data2 = "hoge2";

console.log(data2);
