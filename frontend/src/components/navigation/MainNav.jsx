import React from "react";
import { Link } from "react-router-dom";

function MainNav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/administration">Admin</Link>
    </nav>
  );
}

export default MainNav;
