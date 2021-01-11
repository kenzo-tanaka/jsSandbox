import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    addTodo(value);
    setValue("");
  };

  return (
    <form id="js-form" onSubmit={handleSubmit}>
      <input
        id="js-form-input"
        className="new-todo"
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="What need to be done?"
      />
    </form>
  );
};

export default TodoForm;
