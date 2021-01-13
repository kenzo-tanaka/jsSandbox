const initState = {
  todos: [
    { id: "1", title: "hoge1", completed: false },
    { id: "2", title: "hoge2", completed: false },
    { id: "3", title: "hoge3", completed: false },
  ],
};

const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;
