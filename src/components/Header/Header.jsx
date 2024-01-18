import React from "react";
import { Link } from "react-router-dom";
import CareerHub from "../../assets/logo/CareerHub.png";
import "./Header.css";
import ActiveLInk from "../ActiveLInk/ActiveLInk";

const Header = () => {
  return (
    <nav className="navbar">
      <img src={CareerHub} alt="" />
      <div>
        <ActiveLInk to="/">Home</ActiveLInk>
        <ActiveLInk to="/statistics">Statistics</ActiveLInk>
        <ActiveLInk to="/appliedJobs">Applied Jobs</ActiveLInk>
        <ActiveLInk to="/blog">Blog</ActiveLInk>
      </div>
      <button>Start Applying</button>
    </nav>
  );
};

export default Header;
