import React from "react";
import { connect } from "react-redux";

type Props = {
  todos: {
    id: string;
    title: string;
    completed: boolean;
  }[];
  posts: {
    id: string;
    title: string;
  }[];
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
};

const TodoList: React.FC<Props> = ({
  todos,
  toggleTodo,
  deleteTodo,
  posts,
}) => {
  console.log(posts);
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

const mapStateToProps = (state: { posts: any }) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps)(TodoList);
