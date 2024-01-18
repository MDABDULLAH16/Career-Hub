import React from "react";
import { NavLink } from "react-router-dom";
import "./ActiveLink.css";

const ActiveLInk = ({ children, to }) => {
  return (
    <NavLink to={to} className={({ isActive }) => (isActive ? "active" : "")}>
      {children}
    </NavLink>
  );
};

export default ActiveLInk;
