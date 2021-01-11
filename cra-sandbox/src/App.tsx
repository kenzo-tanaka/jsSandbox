import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const App = () => {
  const todos: { id: number; title: string }[] = [
    { id: 1, title: "hoge" },
    { id: 2, title: "hoge2" },
    { id: 3, title: "hoge3" },
  ];
  return (
    <div className="todoapp">
      <TodoForm />
      <div className="todo-list">
        <TodoList todos={todos} />
      </div>
    </div>
  );
};

export default App;
