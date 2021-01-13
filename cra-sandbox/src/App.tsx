import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import Posts from "./components/pages/Posts";
import useTodo from "./hooks/useTodo";
import { Route, Switch } from "react-router";

const App = () => {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodo();

  return (
    <>
      <Switch>
        <Route exact path="/">
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
        </Route>
        <Route exact path="/posts">
          <Posts />
        </Route>
      </Switch>
    </>
  );
};

export default App;
