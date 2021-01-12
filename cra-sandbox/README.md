```shell
$ yarn
$ yarn start
```

<!-- TODO: つまづいたところをまとめる -->

`create-react-app`で1からTODOアプリを作った。`TypeScript`も使用している。
スタイリングについては、[JavaScript Primer](https://jsprimer.net/use-case/todoapp/)のものを使用させて頂いている。

コードの書き方などについては、「React 実践入門: React の基礎を理解してシンプルなアプリケーションを作る Kindle版」という書籍を参考にした。なお、書籍を実際の内容を実際にコードに落としたときのリポジトリは[こちら](https://github.com/kenzoukenzou/ReactTodoSandbox)

下記では、このプロジェクトを実装している際に躓いたところをまとめている。

## オブジェクトをもった配列の型

- Todoは`id: string`, `title: string`, `completed: boolean`を持ったオブジェクトで、その配列の型(インターフェース)を書きたいと思ったときに、どう書けばいいのかがわからなかった。
- 色々調べた結果、[このページ](https://stackoverflow.com/a/25470775)を参考にして、下記のような書き方をした。
- この実装でやりたいことは実現できているが、こういう書き方が良いのか・他の書き方があるのかなどは調べる必要がある。

```tsx
interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

interface Todos extends Array<Todo> {}
```

