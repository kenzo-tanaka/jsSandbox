import React from "react";

const App = () => {
  const todos: string[] = ["hoge", "hoge2", "hoge3"];
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
            return <li>{todo}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
