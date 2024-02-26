import React, { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../Store/post-list-store";

const PostList = () => {
  const {postList} = useContext(PostListData)
  return (
    <>
      <div className="m-5 mx-5">
       
       {postList.map((post)=>(
       <Post key={post.id} post={post}/>
       ))}
        
      </div>
    </>
  );
};

export default PostList;
