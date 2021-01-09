/*
 CommonJSモジュールは、Node.js環境で利用されているJavaScriptのモジュール化の仕組み
 エクスポート: module.exports
 インポート: require("hoge")
*/

const program = require("commander");
const fs = require("fs"); // ファイルの読み書き
const marked = require("marked");

program.parse(process.argv);
const filePath = program.args[0];

fs.readFile(filePath, { encoding: "utf8" }, (err, file) => {
  if (err) {
    console.error(err.message);

    process.exit(1);
    return;
  }

  const html = marked(file, {
    gfm: false,
  });
  console.log(html);
});
