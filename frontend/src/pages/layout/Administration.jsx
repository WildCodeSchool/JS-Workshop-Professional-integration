import React from "react";
import { Outlet } from "react-router-dom";

import AdminNav from "../../components/navigation/AdminNav";

import "./Administration.css";

function Administration() {
  return (
    <div className="adminContainer">
      <AdminNav />
      <div className="container">
        <h1>Role : Admin</h1>
        <Outlet />
      </div>
    </div>
  );
}

export default Administration;
