import React, { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../Store/post-list-store";
import Welcome from "./Welcome";
import LoadingSpinner from "./Loading Spinner";
import PostListProvider from "../Store/post-list-store";

const PostList = () => {
  const { postList, fetching } = useContext(PostListData);

  return (
    <>
      <div className="m-5 mx-5">
        {fetching && <LoadingSpinner />}
        {!fetching && postList.length === 0 && <Welcome />}
        {!fetching &&
          postList.map((post, index) => <Post key={index} post={post} />)}
      </div>
    </>
  );
};

export default PostList;
