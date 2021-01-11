import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import useTodo from "./hooks/useTodo";

const App = () => {
  const { todos } = useTodo();

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
