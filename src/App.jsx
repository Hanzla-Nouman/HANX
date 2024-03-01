import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import PostList from "./Components/PostList";
import CreatePost from "./Components/Create Post";
import PostListProvider from "./Store/post-list-store";

const App = () => {
  const [selectedTab, setSelectedTab] = useState("Home");


  return (
    <PostListProvider>
      <div className="wholeBody">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="contentBody">
          <Header />
          {selectedTab === "Create Post" ? <CreatePost /> : <PostList />}
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );

};

export default App;
