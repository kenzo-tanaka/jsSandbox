import React from "react";

// TODO: 変更箇所が多くなってしまっている..
type Props = {
  todos: {
    id: string;
    title: string;
    completed: boolean;
  }[];
  toggleTodo: (id: string) => void;
};

const TodoList: React.FC<Props> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <input
              type="checkbox"
              className="checkbox"
              onChange={() => toggleTodo(todo.id)}
              checked={todo.completed}
            ></input>
            {todo.completed ? <s>{todo.title}</s> : todo.title}
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
