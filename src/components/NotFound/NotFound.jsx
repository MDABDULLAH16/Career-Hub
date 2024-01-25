// NotFound.js

import React from "react";
import "./NotFound.css"; // Import the CSS file

const NotFound = () => {
  return (
    <div className="notFoundContainer">
      <h1 className="notFoundHeading">404 - Not Found</h1>
      <p className="notFoundText">
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
};

export default NotFound;
