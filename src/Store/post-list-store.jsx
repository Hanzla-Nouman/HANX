import React, { createContext, useEffect, useState, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  fetching: false,
});

const postListReducer = (currPostList, action) => {
  try {
    let newPostList;
    if (action.type === "DELETE_POST") {
      newPostList = currPostList.filter(
        (post) => post.id !== action.payload.postId
      );
    } else if (action.type === "ADD_INITIAL_POSTS") {
      newPostList = action.payload.posts;
    } else if (action.type === "ADD_POST") {
      newPostList = [action.payload.post, ...currPostList];
      console.log(newPostList)
    }
    return newPostList;
  } catch (error) {
    console.log("Jaaaaaaaaaahil");
  }
};

const PostListProvider = ({ children }) => {
  const [fetching, setfetching] = useState(false);

  useEffect(() => {
    setfetching(true);
    const controller = new AbortController(); // Advanced useEffect stats
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setfetching(false);
      });
    return () => {
      // useEffect hook cleanup
      // console.log("Cleaning up useEffect.");
      // controller.abort();
    };
  }, []);
  const [postList, dispatchPostlist] = useReducer(postListReducer, []);

  const addPost = (post) => {
    dispatchPostlist({
      type: "ADD_POST",
      payload: { post },
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

  // const arr = [45, 67, 28, 17, 7, 100, 56];
  // const sortedArr = useMemo(() => arr.sort(), [arr]);

  const deletePost = (postId) => {
    dispatchPostlist({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost, fetching }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
