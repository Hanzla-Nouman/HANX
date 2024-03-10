import React, { createContext, useReducer } from "react";

export const PostList = createContext({
  postList:[],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  try {
    let newPostList = currPostList;
    if (action.type === "DELETE_POST") {
      newPostList = currPostList.filter(
        (post) => post.id !== action.payload.postId
      );
    } else if (action.type === "ADD_POST") {
      newPostList = [action.payload.post, ...currPostList];
      console.log(newPostList);
    }
    return newPostList;
  } catch (error) {
    console.log("Jaaaaaaaaaahil");
  }
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostlist] = useReducer(postListReducer, []);

  const addPost = (post) => {
    dispatchPostlist({
      type: "ADD_POST",
      payload: { post },
    });
  };

  const deletePost = (postId) => {
    dispatchPostlist({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
