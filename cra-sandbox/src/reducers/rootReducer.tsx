const initState = {
  posts: [
    { id: "1", title: "hoge1" },
    { id: "2", title: "hoge1" },
    { id: "3", title: "hoge1" },
  ],
};

// TODO: action の型を適切に書き換える
const rootReducer = (state = initState, action: any) => {
  return state;
};

export default rootReducer;
