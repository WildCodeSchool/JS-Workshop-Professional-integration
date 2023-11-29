import React from "react";
import { Link } from "react-router-dom";
import {
  GrArticle,
  GrDashboard,
  GrStakeholder,
  GrOrganization,
  GrImage,
  GrGroup,
  GrLogout,
} from "react-icons/gr";

import "./AdminNav.css";

function AdminNav() {
  return (
    <aside className="adminNavContainer">
      <nav>
        <Link to="/administration">
          <GrDashboard /> Dashboard
        </Link>
        <Link to="/administration/articles">
          <GrArticle /> Articles
        </Link>
        <Link to="/administration/authors">
          <GrStakeholder />
          Authors
        </Link>
        <Link to="/administration/publishers">
          <GrOrganization /> Publishers
        </Link>
        <Link to="/administration/images">
          <GrImage /> Images
        </Link>
        <Link to="/administration/users">
          <GrGroup /> Users
        </Link>
      </nav>
      <section>
        <button type="button" onClick="deconnexion">
          <GrLogout /> LogOut
        </button>
      </section>
    </aside>
  );
}

export default AdminNav;
