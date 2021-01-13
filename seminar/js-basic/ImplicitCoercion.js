// 暗黙的な型変換
console.log(1 == "1"); // => true // "1"を数値の1へと暗黙的に型変換してから比較する
console.log(1 + true); // => 2

/*
$ irb # rubyの場合
irb(main):001:0> 1 == "1"
=> false
irb(main):002:0> 1 + true
Traceback (most recent call last):
        5: from /Users/tanakakenzou/.rbenv/versions/2.6.3/bin/irb:23:in `<main>'
        4: from /Users/tanakakenzou/.rbenv/versions/2.6.3/bin/irb:23:in `load'
        3: from /Users/tanakakenzou/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/irb-1.0.0/exe/irb:11:in `<top (required)>'
        2: from (irb):2
        1: from (irb):2:in `+'
TypeError (true can't be coerced into Integer)
*/

// 厳密等価演算子を使う: 暗黙的な型変換をせずに比較をしてくれる
console.log(1 === "1"); // => false
console.log(1 === ["1"]); // => false
