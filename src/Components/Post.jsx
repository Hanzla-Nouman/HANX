import React, { useContext } from "react";
import "../routes/App.css";
import { PostList } from "../Store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <>
      <div className="card m-3 " style={{ width: "40rem" }}>
        <div className="card-body">
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger crossCont"
            onClick={() => deletePost(post.id)}
          >
            <span className="material-symbols-outlined cross">cancel</span>
            <span className="visually-hidden">unread messages</span>
          </span>
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.body}</p>
          {/* {post.tags.map((tag) => (
            <span key={tag} className="badge text-bg-primary">
              {tag.toLowerCase()}
            </span>
          ))} */}{post.tags}
         
          <div className="alert alert-secondary my-2" role="alert">
          This post has been reacted by <b>  {post.reactions} </b>people
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
