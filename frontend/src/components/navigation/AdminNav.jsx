import React from "react";
import { Link } from "react-router-dom";

import "./AdminNav.css";

function AdminNav() {
  return (
    <nav className="adminNavContainer">
      <Link to="/administration">Dashboard</Link>
      <Link to="/administration/articles">Articles</Link>
      <Link to="/administration/authors">Authors</Link>
      <Link to="/administration/publishers">Publishers</Link>
      <Link to="/administration/images">Images</Link>
      <Link to="/administration/users">Users</Link>
    </nav>
  );
}

export default AdminNav;
