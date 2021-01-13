/* プリミティブ型 */
const a1: number = 3;

/* リテラル型 */
/* TODO: りあクト復習 */
const a2: "hoge" = "hoge";
const a3: "hoge" | "hogehoge" | "hogehogehoge" = "hogehoge";

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
