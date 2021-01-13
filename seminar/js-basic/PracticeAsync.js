function blockTime(timeout) {
  const startTime = Date.now();
  while (true) {
    const diffTime = Date.now() - startTime;
    if (diffTime >= timeout) {
      return;
    }
  }
}

function AsyncTryCatch() {
  /* 
    try...catch構文では非同期エラーをキャッチできない
    なので setTimeout の中に try...catch 構文を書かないといけない
  */
  try {
    setTimeout(() => {
      throw new Error("非同期的なエラー");
    }, 10);
  } catch (error) {
    console.log(error);
  }
  console.log("この行は実行される");
}

/* 
 非同期処理も同期処理の影響を受けている, 同じスレッドで実行されている
*/
const startTime = Date.now();
setTimeout(() => {
  const endTime = Date.now();
  console.log(
    `非同期処理のコールバックが呼ばれるまで${
      endTime - startTime
    }ミリ秒かかりました`
  );
}, 10);
console.log("ブロックする処理を開始します");
blockTime(1000); // 1秒間処理をブロックする
console.log("ブロックする処理が完了しました");

AsyncTryCatch();
