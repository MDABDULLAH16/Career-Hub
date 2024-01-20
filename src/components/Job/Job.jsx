import React from "react";
import "./Job.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const Job = ({ job }) => {
  const {
    id,
    logo,
    company_name,
    location,
    job_type,
    salary,
    remote_or_onsite,
    job_title,
  } = job;
  const navigate = useNavigate();
  const handleViewDetails = () => {
    navigate(`/jobDetails/${id}`);
  };
  return (
    <div className="job-post-item">
      <img src={logo} alt="" />
      <h2>{job_title}</h2>
      <p className="company-name">{company_name}</p>
      <div className="job-type">
        <p>{remote_or_onsite}</p>
        <p>{job_type}</p>
      </div>
      <div className="job-location-salary">
        <p>
          <span className="icon">
            <FontAwesomeIcon icon={faLocationPin}></FontAwesomeIcon>
          </span>{" "}
          {location}
        </p>
        <p>
          <span className="icon">
            <FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon>{" "}
          </span>{" "}
          {salary}
        </p>
      </div>
      <button onClick={handleViewDetails} className="btn-view-details">
        <Link to={`/jobDetails/${id}`}>View Details</Link>
      </button>
    </div>
  );
};

export default Job;
