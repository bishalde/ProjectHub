import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./Navbar.css";
const Navbar = () => {
  return (
    <section className="navbar">
      <div className="logo">
        <Link to="/">
        <h1>
          Project <img src="/logos/rmlogo1.png" />
          Tree
        </h1>
        </Link>
      </div>
      <div className="links">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "active" : ""
          }
        >
        Home
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "active" : ""
          }
        >
        Projects
        </NavLink>
        <NavLink
          to="https://github.com/bishalde/ProjectTree"
          className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "active" : ""
          }
        >
        Github
        </NavLink>
        <NavLink
          to="/addproject"
          className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "active" : ""
          }
        >
        Add
        </NavLink>
      </div>
    </section>
  );
};

export default Navbar;
