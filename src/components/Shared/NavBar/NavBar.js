import React, { useState } from "react";
import "./NavBar.css";
import logo from "../../../assets/logo/car-sharing.png";
import { Link } from "react-router-dom";
import { FiAlignCenter, FiHelpCircle, FiHome, FiLogIn, FiSearch } from "react-icons/fi";
import { FaCar } from "react-icons/fa";

const NavBar = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleNavItems = () => setIsActive((prevState) => !prevState);

    const activeStyle = {
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        top: "50px",
        right: 0,
        backgroundColor: "rgb(244, 244, 244)",
        padding: "20px",
    };

    return (
        <nav>
            <ul className="logo-wrapper">
                <li>
                    <Link to="/" className="logo-link">
                        <img src={logo} alt="Brand Logo" />
                        <h3>Hero Rider</h3>
                    </Link>
                </li>
            </ul>
            <ul
                className="nav-items"
                style={isActive ? activeStyle : undefined}
            >
                <li>
                    <Link to="/">
                        <FiHome />
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/find-a-ride">
                        <FiSearch />
                        Find A Ride
                    </Link>
                </li>
                <li>
                    <Link to="/offer-a-ride">
                        <FaCar />
                        Offer A Ride
                    </Link>
                </li>
                <li>
                    <Link to="/help">
                        <FiHelpCircle />
                        Help
                    </Link>
                </li>
                <li className="login">
                    <Link to="/login" className="login-link">
                        <FiLogIn />
                        Login
                    </Link>
                </li>
            </ul>
            <button className="menu-toggle-btn" onClick={toggleNavItems}>
                <FiAlignCenter size="20px" />
            </button>
        </nav>
    );
};

export default NavBar;
