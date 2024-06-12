import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import "./nav-bar.css";

function NavBar() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const navigate = useNavigate();
  const { user, logout } = UserAuth();
  // console.log(user);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("Logout successful");
    } catch (e) {
      console.log(e.message);
    }
  };

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <nav className="nav-bar">
      <Link to="/">
        <img
          className="nav-bar-logo"
          src="./images/logo.png"
          alt="website-logo"
        />
      </Link>
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`nav-links ${isMenuVisible ? "visible" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/tools">Tools</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        {!user ? (
          <li className="login-btn">
            <Link to="/login">Login</Link>
          </li>
        ) : (
          <li className="logout-btn">
            <button onClick={handleLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
