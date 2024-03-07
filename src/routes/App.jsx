import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import PostListProvider from "../Store/post-list-store";
import { Outlet } from "react-router-dom";

const App = () => {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="wholeBody">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="contentBody">
          <Header />
          <Outlet/>
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
};

export default App;
