import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import "./JobDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faDollarSign,
  faEnvelopeCircleCheck,
  faPhone,
  faStreetView,
} from "@fortawesome/free-solid-svg-icons";
import toast, { Toaster } from "react-hot-toast";
import { addToDb, saveApplication } from "../../utilities/fakeDb";

const JobDetails = () => {
  const jobs = useLoaderData();
  console.log(jobs);
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  // console.log(job);

  const {
    experiences,
    educational_requirements,
    job_responsibility,
    job_description,
    salary,
    job_title,
    contact_information,
  } = job;
  // console.log(jobs);
  const handleApply = () => {
    // console.log(typeof jobId, jobId);
    // const submitJobString = localStorage.getItem("applied-job");
    // const submitJob = JSON.parse(submitJobString);
    // console.log(submitJob);
    // for (const id in submitJob) {
    //   const appliedId = parseInt(id);
    //   // console.log(typeof id, id);
    //   if (jobId === appliedId) {
    //     toast("You already applied this Job");
    //   } else {
    //     addToDb(jobId);
    //   }
    // }
    // console.log(id);

    saveApplication(id);
    toast("Applied done this Jobs");
  };
  return (
    <div className="job-details-container">
      <div className="job-details-header">
        <h1>Job Details</h1>
      </div>
      <Toaster />
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
          <button onClick={() => handleApply(id)} className="btn-apply-now">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
