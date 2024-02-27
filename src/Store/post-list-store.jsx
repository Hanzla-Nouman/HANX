import React, { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addInitialPosts: () => {},
  addInitialPost:()=>{}
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostlist] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );
  
  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostlist({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags.split(" "),
      },
    });
  };

  const addInitialPosts = (posts) => {
    dispatchPostlist({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };



  const deletePost = (postId) => {
    console.log("hi");
    dispatchPostlist({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost ,addInitialPosts}}>
      {children}
    </PostList.Provider>
  );
};
const DEFAULT_POST_LIST = [
  {
    id: 1,
    title: "Going to Mumbai",
    body: "Hi Guyz I am gonna mumabi with my family to celeberate vacations for making fun and enertain",
    reactions: 2,
    userId: "user-8",
    tags: ["vacation", "mumbai", "enjoy"],
  },
  {
    id: 2,
    title: "Genocide at Gaza",
    body: "Gonna Gaza for jihad and to serve my remaining life for Gazans",
    reactions: 30,
    userId: "user-4",
    tags: ["Gaza", "War", "Jihad"],
  },
];

export default PostListProvider;
