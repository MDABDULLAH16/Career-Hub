import React, { useEffect, useState } from "react";
import { getSavedApplication } from "../../utilities/fakeDb";
import { useLoaderData } from "react-router-dom";
import AppliedJobDetails from "../AppliedJobDetails/AppliedJobDetails";
import "./AppliedJobs.css";

const AppliedJobs = () => {
  // const [jobs, setJobs] = useState([]);
  const jobs = useLoaderData();
  // console.log(jobs);

  const [displayJob, SetDisplayJob] = useState([]);
  const [appliedJob, SetAppliedJob] = useState([]);

  // console.log(applied);

  // useEffect(() => {
  //   fetch("jobs.json")
  //     .then((res) => res.json())
  //     .then((data) => setJobs(data));
  // }, []);
  //get applied jobs from local Storage
  useEffect(() => {
    const getAppliedJob = getSavedApplication();
    if (jobs.length > 0) {
      const appliedJob = [];
      for (const id of getAppliedJob) {
        // console.log(typeof id);
        const job = jobs.find((job) => job.id == id);
        appliedJob.push(job);
      }
      SetAppliedJob(appliedJob);
      SetDisplayJob(appliedJob);
    }
  }, [jobs]);

  //Jobs Filter
  const handleFilterJob = (filter) => {
    if (filter === "all") {
      SetDisplayJob(appliedJob);
    } else if (filter === "remote") {
      const remote = appliedJob.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      SetDisplayJob(remote);
    } else if (filter === "onsite") {
      const onSite = appliedJob.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      SetDisplayJob(onSite);
    }
  };

  return (
    <div>
      <div className="job-details-header">
        <h1>I Applied Jobs: {appliedJob.length}</h1>
      </div>
      <div className="filter-container">
        <ul className="jobs">
          <li>
            <button onClick={() => handleFilterJob("all")}>All</button>
          </li>
          <li>
            <button onClick={() => handleFilterJob("remote")}>Remote</button>
          </li>
          <li>
            <button onClick={() => handleFilterJob("onsite")}>OnSite</button>
          </li>
        </ul>
      </div>
      {displayJob.map((job) => (
        <AppliedJobDetails key={job.id} job={job}></AppliedJobDetails>
      ))}
    </div>
  );
};

export default AppliedJobs;
