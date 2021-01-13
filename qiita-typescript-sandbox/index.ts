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

/* インデックスシグネチャ */
interface Status {
  level: number;
  [attr: string]: number; // number の任意の名前のプロパティーをセットできる
}
const myStatus: Status = {
  level: 1,
  defence: 30,
};
