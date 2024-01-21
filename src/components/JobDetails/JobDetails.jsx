import React from "react";
import { useLoaderData } from "react-router-dom";
import "./JobDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faDollarSign,
  faEnvelopeCircleCheck,
  faPhone,
  faStreetView,
} from "@fortawesome/free-solid-svg-icons";

const JobDetails = () => {
  const jobs = useLoaderData();
  const {
    experiences,
    educational_requirements,
    job_responsibility,
    job_description,
    salary,
    job_title,
    contact_information,
  } = jobs;
  console.log(jobs);
  return (
    <div className="job-details-container">
      <div className="job-details-header">
        <h1>Job Details</h1>
      </div>
      <div className="job-description-container">
        <div className="job-description">
          <p>
            <span className="font-bold">Job description: </span>
            {job_description}
          </p>
          <p>
            <span className="font-bold"> Job Responsibility: </span>
            {job_responsibility}
          </p>

          <span>
            <h4 className="font-bold">Educational Requirement:</h4>
            <p> {educational_requirements}</p>
          </span>
          <span>
            <h4 className="font-bold">Experience:</h4> <p>{experiences}</p>
          </span>
        </div>
        <div className="details-container">
          <div className="job-details">
            <h3>Job Details</h3>
            <hr className="hr" />
            <p>
              <FontAwesomeIcon
                className="icon"
                icon={faDollarSign}
              ></FontAwesomeIcon>
              <span className="font-bold">Salary: </span>
              {salary} <span className="salary">(per Month)</span>
            </p>
            <p>
              <span className="font-bold">
                {" "}
                <FontAwesomeIcon
                  className="icon"
                  icon={faCalendarDay}
                ></FontAwesomeIcon>
                Job Title:
              </span>{" "}
              {job_title}
            </p>
            <h3>Contact Information</h3>
            <hr />
            <div>
              <p>
                <FontAwesomeIcon
                  className="icon"
                  icon={faPhone}
                ></FontAwesomeIcon>
                <span className="font-bold">Phone: </span>{" "}
                {contact_information.phone}
              </p>
              <p>
                <FontAwesomeIcon
                  className="icon"
                  icon={faEnvelopeCircleCheck}
                />
                <span className="font-bold">Email:</span>{" "}
                {contact_information.email}
              </p>
              <p>
                <FontAwesomeIcon className="icon" icon={faStreetView} />
                <span className="font-bold">Address:</span>{" "}
                {contact_information.address}
              </p>
            </div>
          </div>
          <button className="btn-apply-now">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
