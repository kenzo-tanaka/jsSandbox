const fullName = (lastName, firstName) => {
  return lastName + firstName;
};

let lastName = "Tanaka";
let firstName = "Kenzo";
console.log(fullName(lastName, firstName));

// 型がないと、数値やBoolea型も入れられてしまい、意図せぬ結果を生んでしまいやすい
// 下記の結果は 2 と出力され、コードが長いとデバッグもしんどい
lastName = 1;
firstName = true;
console.log(fullName(lastName, firstName));
