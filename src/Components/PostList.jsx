import React, { useContext, useEffect } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../Store/post-list-store";
import Welcome from "./Welcome";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);

const handleGetPostsClick = () => {
  console.log("fetched")
  fetch("https://dummyjson.com/posts")
  .then((res)=> res.json())
  .then((data)=>{
    addInitialPosts(data.posts);
  });
}


  return (
    <>
      <div className="m-5 mx-5">
        {postList.length === 0 && <Welcome event={handleGetPostsClick}/>}
        {postList.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default PostList;
