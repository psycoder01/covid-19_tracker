import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <div className="navbar">
            <div className="nav-brand">
                <span>Show Covid-19</span>
            </div>
            <div
                className={
                    showMenu ? "nav-links nav-links-active" : "nav-links"
                }
            >
                <ul>
                    <Link to="/">
                        <li>Home</li>
                    </Link>

                    <Link to="/details">
                        <li>Details</li>
                    </Link>
                </ul>
            </div>
            <div
                className={showMenu ? "burger burger-clicked" : "burger"}
                onClick={() => setShowMenu(!showMenu)}
            >
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </div>
    );
};

export default Navbar;
