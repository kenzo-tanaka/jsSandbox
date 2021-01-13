import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import About from "./components/pages/About";
import useTodo from "./hooks/useTodo";
import { Route, Switch } from "react-router";

const App = () => {
  const { addTodo, toggleTodo, deleteTodo } = useTodo();

  return (
    <>
      <Switch>
        <Route exact path="/">
          <div className="todoapp">
            <TodoForm addTodo={addTodo} />
            <div className="todo-list">
              <TodoList toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
            </div>
          </div>
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </>
  );
};

export default App;
