/*
 Promiseインスタンスには、Fulfilled, Rejected, Pendingの3つの状態が存在する
 一度でも Fullfilled, Rejected の状態になると、そこから状態は変化しない。
*/

/*
 await式では非同期処理を実行して完了するまで、次の処理を実行しない。
*/

async function hoge() {
  console.log("hoge");
}

async function hoge2() {
  await hoge();
  console.log("この行は非同期処理完了後に実行される。");
}

hoge2();
