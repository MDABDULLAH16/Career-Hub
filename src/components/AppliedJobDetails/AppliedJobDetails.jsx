import { faDollarSign, faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AppliedJobDetails.css";

const AppliedJobDetails = ({ job }) => {
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
    <div>
      <div className="jobs-container">
        <div className="details-logo">
          <img src={logo} alt="" />
        </div>
        <div className="details-title-container">
          <div className="details-container">
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
          </div>
          <button
            onClick={handleViewDetails}
            className="btn-view-details applied-jobs  "
          >
            <Link to={`/jobDetails/${id}`}>View Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobDetails;
