// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          📚 Book Collection Manager
        </Link>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}>
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              หน้าหลัก
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/books"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              รายการหนังสือ
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/books/add"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              เพิ่มหนังสือ
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
