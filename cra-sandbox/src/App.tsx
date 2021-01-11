import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const App = () => {
  const todos: { id: number; title: string; completed: boolean }[] = [
    { id: 1, title: "hoge", completed: false },
    { id: 2, title: "hoge2", completed: false },
    { id: 3, title: "hoge3", completed: false },
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
