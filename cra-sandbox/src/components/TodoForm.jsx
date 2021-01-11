import React from "react";

const TodoForm = () => {
  return (
    <form id="js-form">
      <input
        id="js-form-input"
        className="new-todo"
        type="text"
        placeholder="What need to be done?"
      />
    </form>
  );
};

export default TodoForm;
