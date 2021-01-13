const initState = {
  posts: [
    { id: "1", title: "hoge1" },
    { id: "2", title: "hoge2" },
    { id: "3", title: "hoge3" },
  ],
};

const rootReducer = (
  state = initState,
  action: { type: string; id: string }
) => {
  if (action.type === "DELETE_POST") {
    const newPosts = state.posts.filter((post) => action.id !== post.id);
    return {
      ...state,
      posts: newPosts,
    };
  }
  return state;
};

export default rootReducer;
