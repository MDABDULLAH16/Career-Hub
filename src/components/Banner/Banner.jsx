import React from "react";
import user from "../../assets/images/user.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-text">
        <h1>
          One Step <br /> Closer To Your <br />
          <span className="dream-job">Dream Job</span>
        </h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button className="btn-getStart">Get Started</button>
      </div>
      <img src={user} alt="" />
    </div>
  );
};

export default Banner;
