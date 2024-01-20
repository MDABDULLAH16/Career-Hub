import React from "react";
import { useLoaderData } from "react-router-dom";
import "./JobDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";

const JobDetails = () => {
  const jobs = useLoaderData();
  const {
    experiences,
    educational_requirements,
    job_responsibility,
    job_description,
    salary,
    job_title,
  } = jobs;
  console.log(jobs);
  return (
    <div className="job-details-container">
      <div className="job-details-header">
        <h1>Job Details</h1>
      </div>
      <div className="job-description-container">
        <div>
          <p>
            <span className="font-bold">Job description: </span>
            {job_description}
          </p>
          <p>
            <span className="font-bold"> Job Responsibility: </span>
            {job_responsibility}
          </p>

          <span>
            <h4>Educational Requirement:</h4>
            <p> {educational_requirements}</p>
          </span>
          <span>
            <h4>Experience:</h4> <p>{experiences}</p>
          </span>
        </div>
        <div className="details-container">
          <div className="job-details">
            <h1>Job Details</h1>

            <p>
              {" "}
              <FontAwesomeIcon
                className="icon"
                icon={faDollarSign}
              ></FontAwesomeIcon>
              <span className="font-bold">Salary: </span>
              {salary} <span className="salary">(per Month)</span>
            </p>
            <p>
              <span className="font-bold">Job Title:</span> {job_title}
            </p>
            <div></div>
          </div>
          <button className="btn-apply-now">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
