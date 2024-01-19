import React from "react";
import CareerHub from "../../assets/logo/CareerHub.png";
import "./Header.css";
import ActiveLInk from "../ActiveLInk/ActiveLInk";

const Header = () => {
  return (
    <nav className="navbar">
      <ActiveLInk to="/">
        <img src={CareerHub} alt="" />
      </ActiveLInk>
      <div className="link">
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
