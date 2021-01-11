// TODO: 後で使う
// import { uuid } from "uuidv4";

import { useEffect, useState } from "react";

export default function useTodo() {
  const [todos, setTodos] = useState([]);

  // TODO: デフォルトのTODOを型付きでセットしたい
  useEffect(() => {
    setTodos([]);
  }, []);

  const addTodo = () => {
    console.log(todos);
  };

  return { addTodo };
}
