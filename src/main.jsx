import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./components/Main/Main.jsx";
import Home from "./components/Home/Home.jsx";
import Statistics from "./components/Statistics/Statistics.jsx";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs.jsx";
import Blog from "./components/Blog/Blog.jsx";
import JobDetails from "./components/JobDetails/JobDetails.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch("data.json"),
      },
      {
        path: "/appliedJobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch("/jobs.json"),
      },
      { path: "/blog", element: <Blog></Blog> },
      {
        path: "/jobDetails/:id",
        element: <JobDetails></JobDetails>,
        loader: () => fetch("/jobs.json"),
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
