const displayFullName = (lastName: string, firstName: string): string => {
  return lastName + firstName;
};

let lastName2: string = "Tanaka";
let firstName2: string = "Kenzo";
console.log(displayFullName(lastName2, firstName2));

// 型があると、異なる型の再代入がコンパイルエラーになるので、バグを生まない実装ができる
// lastName2 = 1;
// firstName2 = true;

// 引数の型が間違っているときもコンパイルエラーで弾いてくれる
// console.log(displayFullName(1, true));
