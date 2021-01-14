/* プリミティブ型 */
const a1: number = 3;

/* リテラル型 */
/* TODO: りあクト復習 */
const a2: "hoge" = "hoge";
const a3: "hoge" | "hogehoge" | "hogehogehoge" = "hogehoge"; // ユニオン型とのあわせ技

/* 型推論 */
let a4 = "test";

/* オブジェクト型 */
interface Myobj {
  foo: string;
  bar: number;
}
const a5: Myobj = {
  foo: "hoge",
  bar: 3,
};

/* 配列型 */
const a6: number[] = [1, 2, 3];

/* 関数型 */
const a7: (foo: string) => number = func;
function func(arg: string): number {
  return Number(arg);
}

// アロー関数
// ref: https://www.tutorialsteacher.com/typescript/arrow-function
let a8 = (x: number, y: number): number => {
  return x + y;
};
const add = (n: number, m: number): number => n + m;
const hello = (): void => {
  console.log("Hello");
};

/* void型 */
const a9 = (): void => {
  console.log("hoge");
};

/* ジェネリクス */
/* TODO: 復習する */
interface Foo<S, T> {
  foo: S;
  bar: T;
}

const a10: Foo<number, string> = {
  foo: 1,
  bar: "hoge",
};

/* タプル型 */
const a11: [string, number] = ["foo", 10];

/* interface */
const red: { rgb: string; opacity: number } = { rgb: "ff0000", opacity: 1 }; // 毎回書くのは面倒...
interface Color {
  readonly rgb: string;
  opacity: number;
  name?: string;
}
const turquoise: Color = { rgb: "00afcc", opacity: 1 };

// interfaceに関数を定義
interface NumOp {
  (n: number, m: number): number;
}
// add2の型をNumOpで定義している
const add2: NumOp = function (n, m) {
  return n + m;
};

/* インデックスシグネチャ */
interface Status {
  level: number;
  [attr: string]: number; // number の任意の名前のプロパティーをセットできる
}
const myStatus: Status = {
  level: 1,
  defence: 30,
};

/* 関数の型宣言にジェネリクスを使う記法 */
const toArray = <T>(arg1: T, arg2: T): T[] => [arg1, arg2];
toArray("foo", "bar"); // ["foo", "bar"]
toArray(1, 2); // [1,2]
// Tは型引数, 任意の型を<>におって渡すことでその関数の引数や戻り値の型に適用できる

// 上記を可変長引数で行いたい場合
const toArrayVariably = <T>(...args: T[]) => [...args];
toArrayVariably(1, 2, 3, 4, 5); // [1,2,3,4,5]

/* 型エイリアス type */
// 任意の型に別名を与えて再利用できる機能
