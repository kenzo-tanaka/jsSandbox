import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import useTodo from "./hooks/useTodo";

const App = () => {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodo();

  return (
    <div className="todoapp">
      <TodoForm addTodo={addTodo} />
      <div className="todo-list">
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
};

export default App;
