import React from "react";
import TodoList from "./components/TodoList";

const App = () => {
  const todos: { id: number; title: string }[] = [
    { id: 1, title: "hoge" },
    { id: 2, title: "hoge2" },
    { id: 3, title: "hoge3" },
  ];
  return (
    <div className="todoapp">
      <form id="js-form">
        <input
          id="js-form-input"
          className="new-todo"
          type="text"
          placeholder="What need to be done?"
        />
      </form>
      <div className="todo-list">
        <ul>
          {todos.map((todo) => {
            return <TodoList id={todo.id} title={todo.title} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
