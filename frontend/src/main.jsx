import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import AdminArticle from "./pages/admin/AdminArticle";
import AdminAuthor from "./pages/admin/AdminAuthor";
import AdminPublisher from "./pages/admin/AdminPublisher";
import AdminUser from "./pages/admin/AdminUser";
import Administration from "./pages/layout/Administration";
import AdminImage from "./pages/admin/AdminImage";
import Dashboard from "./pages/admin/Dashboard";
import AdminOneArticles from "./pages/admin/AdminOneArticles";
import AdminOneAuthor from "./pages/admin/AdminOneAuthor";
import AdminOnePublisher from "./pages/admin/AdminOnePublisher";
import AdminOneImage from "./pages/admin/AdminOneImage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/administration/",
    element: <Administration />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "articles",
        element: <AdminArticle />,
      },
      {
        path: "articles/:id",
        element: <AdminOneArticles />,
      },
      {
        path: "authors",
        element: <AdminAuthor />,
      },
      {
        path: "authors/:id",
        element: <AdminOneAuthor />,
      },
      {
        path: "publishers",
        element: <AdminPublisher />,
      },
      {
        path: "publishers/:id",
        element: <AdminOnePublisher />,
      },
      {
        path: "images",
        element: <AdminImage />,
      },
      {
        path: "images/:id",
        element: <AdminOneImage />,
      },
      {
        path: "users",
        element: <AdminUser />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
