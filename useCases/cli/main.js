/*
 CommonJSモジュールは、Node.js環境で利用されているJavaScriptのモジュール化の仕組み
 エクスポート: module.exports
 インポート: require("hoge")
*/

const program = require("commander");
program.parse(process.argv);

const filePath = program.args[0];
console.log(filePath);
