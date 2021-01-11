// TODO: 後で使う
// import { uuid } from "uuidv4";

import { useEffect, useState } from "react";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// @see https://stackoverflow.com/a/25470775
interface Todos extends Array<Todo> {}

export default function useTodo() {
  const [todos, setTodos] = useState<Todos>([]);

  // 初回レンダリング時にデフォルトのTODOをセット
  useEffect(() => {
    setTodos([
      { id: 1, title: "hoge", completed: false },
      { id: 2, title: "hoge2", completed: false },
      { id: 3, title: "hoge3", completed: false },
    ]);
  }, []);

  return { todos };
}
