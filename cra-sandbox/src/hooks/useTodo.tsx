// TODO: 後で使う
// import { useState, useEffect } from "react";
// import { uuid } from "uuidv4";

export default function useTodo() {
  const addTodo = () => {
    console.log("added");
  };

  return { addTodo };
}
