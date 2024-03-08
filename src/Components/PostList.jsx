import React from "react";
import Post from "./Post";
import Welcome from "./Welcome";
import { useLoaderData } from "react-router-dom";
 
const PostList = () => {
  const postList = useLoaderData();

  return (
    <>
      <div className="m-5 mx-5">
        {postList.length === 0 && <Welcome />}
        {postList.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </>
  );
};

export const PostListLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};

export default PostList;
