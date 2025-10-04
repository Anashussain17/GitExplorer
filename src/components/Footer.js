import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-white text-center py-3 mb-0 mt-5">
        <center>
          <Link to="/" style={{ paddingRight: "10px" }}>
            Home
          </Link>
          <Link to="/about" style={{ paddingRight: "10px" }}>
            About
          </Link>

          <Link to="/contact">Contact</Link>

          <p>Copyright &copy; 2025 GitExplorer. All rights reserved.</p>
        </center>
      </footer>
    </>
  );
};

export default Footer;
