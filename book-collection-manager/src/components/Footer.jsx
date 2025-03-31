// src/components/Footer.jsx
import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {currentYear} Book Collection Manager - React Mini Project</p>
        <div className="footer-links">
          <a
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Documentation
          </a>
          <a
            href="https://vitejs.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite
          </a>
          <a
            href="https://reactrouter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Router
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
