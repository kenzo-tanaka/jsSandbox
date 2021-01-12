import { useEffect, useState } from "react";
import { uuid } from "uuidv4";

interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

// @see https://stackoverflow.com/a/25470775
interface Todos extends Array<Todo> {}

export default function useTodo() {
  const [todos, setTodos] = useState<Todos>([]);
  useEffect(() => {
    setTodos([
      { id: uuid(), title: "hoge", completed: true },
      { id: uuid(), title: "hoge2", completed: false },
      { id: uuid(), title: "hoge3", completed: false },
    ]);
  }, []);

  const toggleTodo = (id: string) => {
    const todo = todos.find((todo) => todo.id === id);
    // スプレッド構文を使うと id, titleなどが optional になる動きだったので Object.assign(target, source); を使っている
    const newTodo = Object.assign(todo, { completed: !todo?.completed });

    const newTodos = todos.map((todo) =>
      todo.id !== newTodo.id ? todo : newTodo
    );

    setTodos(newTodos);
  };

  const addTodo = (todoTitle: string) => {
    const newTodo: Todo = {
      id: uuid(),
      title: todoTitle,
      completed: false,
    };

    setTodos(todos.concat(newTodo));
  };

  return { todos, addTodo, toggleTodo };
}
