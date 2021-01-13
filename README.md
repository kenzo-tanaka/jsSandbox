## 概要
JavaScriptについて学習した内容のメモ書き。

- 関数型プログラミング
- Reactの思想（宣言的とは）
- Vue.jsとの比較
- クラスコンポーネントと関数コンポーネントの違い、関数コンポーネントを使う意義
- Reactを使うメリット
- プロトタイプベースのオブジェクト指向

## 関数型プログラミング
3-1. 関数型プログラミングは何がうれしい？

- 関数型プログラミングでいう、**関数とは数学の関数**と同じ
- 与えられた引数が同じなら、返る値は同じ（**参照透過性**）
- プログラミングには「命令型プログラミング」/「宣言型プログラミング」がある
- **命令型**: 手続き型プログラミング, オブジェクト指向プログラミング
  - ほしい結果を目指して処理を積み重ねていく
- **宣言型**: 出力の性質、あるべき状態を宣言する
  - SQLなど、どうやって処理するかではなく「**どんなデータがほしいかを宣言**」している

以下では、手続き型と関数型の違いを具体的なコードで比較している。

```js
// 手続き型
{
  const octuples = [];

  for (let n = 1; n < 101; n += 1) {
    if (n % 8 === 0) {
      octuples.push(n);
    }
  }

  console.log(octuples);
}

// 関数型
{
  const range = (start, end) => [...new Array(end - start).keys()].map((n) => n + start);
  console.log(range(1, 101).filter((n) => n % 8 === 0));
}
```

手続き方の方は`n`に対して100回の再代入が行われる、`octuples`に対して12回の破壊的変更が行われる。  
**ミュータブルな変数に依存**する処理のため、途中で`n`を書き換えられたりする可能性があり、バグが入り込みやすい。
最初からイミュータブルな変数しか使わなければ、上記のようなことは起こり得ない。

## Reactの思想（宣言的とは）
7-1. Reactをめぐるフロントエンドの歴史

### 時系列
- 2005年: Google MapがAjaxを採用して初めてHTML,JavaScriptによって本質的な課題解決をして注目が集まった。
- 2005-2006年: prototype.js, jQueryが登場(HTMLをベースに一部を動的に書き換える)
- 2008年: HTML5 Flashなどを置き換える, ChromeのJavaScriptエンジンであるV8をOSS化
- 2010年: Backbone.js, knockout, AngularJSが登場(MVCデザインパターンをクライアントサイド向けにアレンジ)
  - フロントエンドでは、クリックやスクロールなど大量に細かいイベントが飛び交い、MVCの暗黙の前提が通用しなかった。
- 2011年: Web ComponentsをGoogleのエンジニアが発表(JSXに近いイメージ)
- 同時期: Reactが爆誕

### 宣言的
あるべき状態を記述してプログラムを構成する。例えば下記のように、「どういうデータを描画したいか」を記述する。

```js
<Greets name="Patty" times={4} />
```

描画側は宣言的だが、コンポーネントを定義する箇所は手続き的であるというジレンマがあった。

宣言的プログラミングのパラダイムはより大きな概念として、その中に**関数型プログラミング**を含んでいる。
値と演算子、関数によって構成される式を基本構文として、参照透過性を担保する関数型プログラミングは、「出力がプログラムのテキストから一律に定まる」という性質によって宣言的プログラミングに分類される

初期のReactはクラスコンポーネントしかなかったので、「宣言的」とは言えなかったが、**関数コンポーネント**を導入することで「宣言的」を実現してきた。(「宣言的」はReactの公式ページから一度姿を消して、数年後また現れた)

### コンポーネントベース、Just The UI
UIだけに関知する、フルスタックなフレームワークではない。
アプリケーションを作る場合は、サードパーティのライブラリなどを使わないといけない。

Reactのこのスタンスによって、周辺のライブラリが自然に進歩していった。
Facebookはグローバルな状態管理にFluxというデザインパターンを示したが、その後より秀逸なReduxというライブラリが現れ、そちらがスタンダードとなった。(Reduxの作者はその後、FacebookにスカウトされてReactの進歩に貢献している)

### 仮想DOM

- フロントエンドではブラウザで起こるイベントに対してリアルタイムにViewを書き換える必要がある。
- React以前に登場したフレームワークでは**データバインディング**に、色々問題があった。
  - 例えば、AngularJSなどはアルゴリズムの問題でパフォーマンスが悪かったり。
- Reactは**仮想DOM**を使って、この問題を解決した。  
  - 仮想DOM：メモリに展開されたイミュータブルな要素ツリー
  - レンダリングが発火すると、親子構造になったコンポーネントのレンダリングが props を受け渡ししながら起爆されて、最終的にはHTML要素に対応するReact Elementsにまで展開されたツリーが残る。
  - これがリアルDOMに変換されてブラウザが実際にレンダリングすることになるのだが、**変換前の要素ツリーはメモリ上にキャッシュ**される。
  - ツリーのどこかの要素の状態が変更されると、`render`が再実行されて、子孫ツリーのレンダリング内容が変化
  - **新しい仮想DOMと、キャッシュされていた以前の仮想DOMを比較して差分だけをリアルDOMに反映させる**

### 単方向データフロー

- Reactにおける単方向データフローとは、データがコンポーネントツリーを親から子へ一方向に、propsという形をとって流れ落ちること。
  - 子→親にデータが逆流することはない
- 単方向データフローでは、Viewからは必ずStoreに向けてイベントが発行される
  - `View -> Store -> View -> Store ...`

### Learn Once, Writer Anywhere

- React Native

## Vue.jsとの比較

- HTMLベースで直感的に理解できる
- コンポーネントベースのアーキテクチャに結びつけようとするとと無理が出てくる
- Vue.jsはEasyさをアピールしていて、明確な思想・スタンスを提示していない。
- 関連
  - [ReactとVueのどちらを選ぶか - Qiita](https://qiita.com/yoichiwo7/items/236b6535695ea67b4fbe)
  - [完全に独断と偏見だけどReact vs Vue してみた - Qiita](https://qiita.com/102Design/items/ae018dc80a4d879d92a8)


## サクッと振り返る`react-router`のコンポーネントAPI

- `Route`: どのパスでどのコンポーネントを描画するかを規定する
- `Switch`: パスとコンポーネントの組み合わせを`switch-case`のように規定
- `Redirect`: リダイレクトさせる

```shell
$ yarn add react-router react-router-dom
$ yarn add @types/react-router-dom # typescript
```

```tsx
<Switch>
  <Route exact path="/">
    <Hoge />
  </Route>
  <Route exact path="/about">
    <About />
  </Route>
  <Route>
    <NotFound />
  </Route>
</Switch>
```

## `Redux`をあらためてがっつりと。

- `Redux`は`Flux`の思想を受け継いでいる
  - `Flux`は明確にMVCパターンを否定している
  - サーバーサイドではデータフローは `model -> view`の一方向
  - SPAでは `view -> model`のフローがいくつも出てくる
  - 参考: [Facebook の決断：MVCはスケールしない。ならば Flux だ。](https://www.infoq.com/jp/news/2014/05/facebook-mvc-flux/)
  - なので `Flux` ではデータの流れを単方向にしている
- `Flux`はReact開発者に受け入れられたが、在野の天才開発者が`Redux`を発表して、そちらがスタンダードとなった。
  - 参考: [Dan Abramov - Live React: Hot Reloading with Time Travel at react-europe 2015 - YouTube](https://www.youtube.com/watch?v=xsSnOQynTHs)
  - もちろん、のちにFacebookに引き抜かれた
- `Redux`の思想
  - Single source of truth
    - ただひとつの`store`オブジェクトによるツリー構造で状態を管理する
  - State is read-only
    - storeの状態更新は、`action`を発行する方法のみ限定。
  - Changes are made with pure functions
    - storeを更新するためには`reducer`という純粋関数を使用する。

以下は簡単なサンプルコードと、解説。  

- `initState`で初期の状態を定義
- `myreducer`関数は、状態と`action`を受け取って、状態を更新
- `todoAction`では「どういうことをしてほしいか」を定義している
- `store.dispatch`で`todoAction`を送信して状態更新を行う
- 参考: [Complete React Tutorial (& Redux) #38 - Store Subscriptions - YouTube](https://www.youtube.com/watch?v=0r3eKhWag-8)

```js
const { createStore } = Redux;

// initail state
const initState = {
  todos: [],
  posts: [],
};

function myreducer(state = initState, action) {
  // check action type
  if (action.type === 'ADD_TODO') {
    return {
      ...state,
      todos: [...state.todos, action.todo]
    }
  }
}

const store = createStore(myreducer);

store.subscribe(() => {
  console.log('state is updated');
  console.log(store.getState());
})

const todoAction = { type: 'ADD_TODO', todo: 'buy milk' };

// dispatch
store.dispatch(todoAction)
```

