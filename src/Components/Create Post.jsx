import React, { useContext, useRef } from "react";
import "../App.css";
import { PostList } from "../Store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const postReactionElement = useRef();
  const postTagsElement = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = postReactionElement.current.value;
    const tags = postTagsElement.current.value;
    addPost(userId, postTitle, postBody, reactions, tags);
  };
  return (
    <>
      <div className="formParent" >
        <form className="formCont" onSubmit={handleSubmit} >
          <h1 className=" text-center ">CREATE POST</h1>
          <div className="mb-3 ">
            <label htmlFor="userId" className="form-label">
              User Id
            </label>
            <input
              ref={userIdElement}
              type="text"
              className="form-control"
              id="userId"
              placeholder="Enter your user Id!"
            />
          </div>
          <div className="mb-3 ">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              ref={postTitleElement}
              placeholder="What's in your mind?"
            />
          </div>

          <div className="mb-3 ">
            <label htmlFor="body" className="form-label">
              Body
            </label>
            <textarea
              rows="4"
              type="text"
              className="form-control"
              id="body"
              ref={postBodyElement}
              placeholder="Just write here!"
            />
          </div>
          <div className="mb-3 ">
            <label htmlFor="reactions" className="form-label">
              Reactions
            </label>
            <input
              type="text"
              className="form-control"
              id="reactions"
              ref={postReactionElement}
              placeholder="Enter the number of reactions!"
            />
          </div>

          <div className="mb-3 ">
            <label htmlFor="tags" className="form-label">
              Tags
            </label>
            <input
              type="text"
              className="form-control"
              id="tags"
              ref={postTagsElement}
              placeholder="Enter the tags with space!"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Post
          </button>
        </form>
      </div>
    </>
  );
};

export default CreatePost;
