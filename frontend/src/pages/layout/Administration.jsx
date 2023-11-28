import React from "react";
import { Outlet } from "react-router-dom";

import AdminNav from "../../components/navigation/AdminNav";

import "./Administration.css";

function Administration() {
  return (
    <div className="adminContainer">
      <AdminNav />
      <Outlet />
    </div>
  );
}

export default Administration;
