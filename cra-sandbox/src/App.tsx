import React from "react";

const App = () => {
  const todos: string[] = ["hoge", "hoge2", "hoge3"];
  return (
    <div className="App">
      {todos.map((todo) => {
        return <p>{todo}</p>;
      })}
    </div>
  );
};

export default App;
