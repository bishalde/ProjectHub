import React,{useState} from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {
  const[navclass,setNavclass]=useState("links")

  const navChange=()=>{
    if(navclass==="links"){
      setNavclass("links navActive")
    }
    else{
      setNavclass("links")
    }
  }

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

      <div className="hamberger" onClick={navChange}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className={navclass}>
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
          to="/Login"
          className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "active" : ""
          }
        >
        Login
        </NavLink>
      </div>
    </section>
  );
};

export default Navbar;
