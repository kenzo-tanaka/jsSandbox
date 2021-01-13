import React from "react";
import { connect } from "react-redux";

// TODO: 変更箇所が多くなってしまっている..
type Props = {
  todos: {
    id: string;
    title: string;
    completed: boolean;
  }[];
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
};

const TodoList: React.FC<Props> = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <input
              type="checkbox"
              className="checkbox"
              onChange={() => toggleTodo(todo.id)}
              checked={todo.completed}
            ></input>
            {todo.completed ? <s>{todo.title}</s> : todo.title}
            <button className="delete" onClick={() => deleteTodo(todo.id)}>
              x
            </button>
          </li>
        );
      })}
    </ul>
  );
};

const mapStateToProps = (state: { todos: any }) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps)(TodoList);
