import React from "react";
import { connect } from "react-redux";

type Props = {
  posts: {
    id: string;
    title: string;
  }[];
  deletePost: (id: string) => void;
};

const Posts: React.FC<Props> = ({ posts, deletePost }) => {
  return (
    <div className="todoapp">
      <div className="todo-list">
        <ul>
          {posts.map((post) => {
            return (
              <li key={post.id}>
                {post.title}
                <button className="delete" onClick={() => deletePost(post.id)}>
                  x
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state: { posts: any }) => {
  return {
    posts: state.posts,
  };
};

const mapDispatchToProps = (
  dispatch: (arg0: { type: string; id: string }) => void
) => {
  return {
    deletePost: (id: string) => {
      dispatch({ type: "DELETE_POST", id: id });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
