import React from "react";

type Props = {
  todos: {
    id: number;
    title: string;
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
