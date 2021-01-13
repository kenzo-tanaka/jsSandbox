import React from "react";
import { connect } from "react-redux";

type Props = {
  posts: {
    id: string;
    title: string;
  }[];
};

const Posts: React.FC<Props> = ({ posts }) => {
  return (
    <div className="todoapp">
      <div className="todo-list">
        <ul>
          {posts.map((post) => {
            return (
              <li key={post.id}>
                {post.title}
                <button className="delete">x</button>
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

export default connect(mapStateToProps)(Posts);
