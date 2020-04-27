import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  useEffect(() => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");

    burger.addEventListener("click", () => {
      nav.classList.toggle("nav-links-active");
      burger.classList.toggle("burger-clicked")
    });
  }, []);
  return (
    <div className="navbar">
      <div className="nav-brand">
        <span>Show Covid-19</span>
      </div>
      <div className="nav-links">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>

          <Link to="/details">
            <li>Details</li>
          </Link>

          <Link to="/news">
            <li>News</li>
          </Link>
        </ul>
      </div>
      <div className="burger">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </div>
  );
};

export default Navbar;
