import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../Store/post-list-store";
import Welcome from "./Welcome";
import LoadingSpinner from "./Loading Spinner";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
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
    return () => {  // useEffect hook cleanup
      console.log("Cleaning up useEffect.");
      controller.abort();
    };
  }, []);

  return (
    <>
      <div className="m-5 mx-5">
        {fetching && <LoadingSpinner />}
        {!fetching && postList.length === 0 && <Welcome />}
        {!fetching &&
          postList.map((post) => <Post key={post.id} post={post} />)}
      </div>
    </>
  );
};

export default PostList;
