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
        return <li key={todo.id}>{todo.title}</li>;
      })}
    </ul>
  );
};

export default TodoList;
