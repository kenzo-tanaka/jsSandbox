import React from "react";

// TODO: 変更箇所が多くなってしまっている..
type Props = {
  todos: {
    id: string;
    title: string;
    completed: boolean;
  }[];
};

const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <input
              type="checkbox"
              className="checkbox"
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
