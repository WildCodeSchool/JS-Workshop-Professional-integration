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
import AdminOne from "./pages/admin/AdminOne";

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
        element: <AdminOne />,
      },
      {
        path: "authors",
        element: <AdminAuthor />,
      },
      {
        path: "authors/:id",
        element: <AdminOne />,
      },
      {
        path: "publishers",
        element: <AdminPublisher />,
      },
      {
        path: "publishers/:id",
        element: <AdminOne />,
      },
      {
        path: "images",
        element: <AdminImage />,
      },
      {
        path: "images/:id",
        element: <AdminOne />,
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
