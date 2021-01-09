/*
 CommonJSモジュールは、Node.js環境で利用されているJavaScriptのモジュール化の仕組み
 エクスポート: module.exports
 インポート: require("hoge")
*/

const program = require("commander");
const fs = require("fs"); // ファイルの読み書き
const marked = require("marked");

// gfmオプションを定義
program.option("--gfm", "GFMを有効にする");
program.parse(process.argv);
const filePath = program.args[0];

const cliOptions = {
  gfm: false,
  ...program.opts(),
};

fs.readFile(filePath, { encoding: "utf8" }, (err, file) => {
  if (err) {
    console.error(err.message);

    process.exit(1);
    return;
  }

  const html = marked(file, {
    gfm: cliOptions.gfm,
  });
  console.log(html);
});
