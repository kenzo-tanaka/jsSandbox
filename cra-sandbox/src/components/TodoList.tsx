import React from "react";

// TODO: 本当は配列にしたい。
type Props = {
  id: number;
  title: string;
};

const TodoList: React.FC<Props> = ({ id, title }) => {
  return <li key={id}>{title}</li>;
};

export default TodoList;
