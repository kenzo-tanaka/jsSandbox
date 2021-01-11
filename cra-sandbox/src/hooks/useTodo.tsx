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
      { id: uuid(), title: "hoge", completed: false },
      { id: uuid(), title: "hoge2", completed: false },
      { id: uuid(), title: "hoge3", completed: false },
    ]);
  }, []);

  const addTodo = (todoTitle: string) => {
    const newTodo: Todo = {
      id: uuid(),
      title: todoTitle,
      completed: false,
    };

    setTodos(todos.concat(newTodo));
  };

  return { todos, addTodo };
}
