import "./index.css";
import React from "react";
import App from "./routes/App.jsx";
import ReactDOM from "react-dom/client";
import PostList, { PostListLoader } from "./Components/PostList.jsx";
import CreatePost from "./Components/Create Post.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", loader: PostListLoader, element: <PostList /> },
      { path: "/create-post", element: <CreatePost /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
