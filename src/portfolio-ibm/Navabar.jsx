import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase"; // your firebase.js file
import "../SCSS/app.scss";

import {
  FaHouse,
  FaTags,
  FaUser,
  FaEnvelope,
  FaRightToBracket,
  FaUserPlus,
  FaTableColumns,
  FaUserGear,
  FaArrowRightFromBracket,
} from "react-icons/fa6";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });

    return () => unsubscribe(); // clean up listener
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div className="nav-section">
      <ul className="nav-bars">
        <li>
          <Link to="/home">
            <FaHouse /> Home
          </Link>
        </li>
        <li>
          <Link to="/pricing">
            <FaTags /> Pricing
          </Link>
        </li>
        <li>
          <Link to="/about">
            <FaUser /> About
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <FaEnvelope /> Contact
          </Link>
        </li>

        {!isLoggedIn ? (
          <>
            <li>
              <Link to="/login">
                <FaRightToBracket /> Login
              </Link>
            </li>
            <li>
              <Link to="/signup">
                <FaUserPlus /> Sign Up
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/dashboard">
                <FaTableColumns /> Dashboard
              </Link>
            </li>
            <li>
              <Link to="/account">
                <FaUserGear /> Account
              </Link>
            </li>
            <li onClick={handleLogout} style={{ cursor: "pointer" }}>
              <FaArrowRightFromBracket /> Logout
            </li>
          </>
        )}
      </ul>
      <h1>Portfolio Builder</h1>
    </div>
  );
}

export default Navbar;
