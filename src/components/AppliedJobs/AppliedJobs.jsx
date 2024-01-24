import React, { useEffect, useState } from "react";
import { getSavedApplication } from "../../utilities/fakeDb";
import { useLoaderData } from "react-router-dom";
import AppliedJobDetails from "../AppliedJobDetails/AppliedJobDetails";

const AppliedJobs = () => {
  // const [jobs, setJobs] = useState([]);
  const jobs = useLoaderData();
  // console.log(jobs);

  const [displayJob, SetDisplayJob] = useState([]);

  // console.log(applied);

  // useEffect(() => {
  //   fetch("jobs.json")
  //     .then((res) => res.json())
  //     .then((data) => setJobs(data));
  // }, []);
  useEffect(() => {
    const getAppliedJob = getSavedApplication();
    if (jobs.length > 0) {
      const appliedJob = [];
      for (const id of getAppliedJob) {
        // console.log(typeof id);
        const job = jobs.find((job) => job.id == id);
        appliedJob.push(job);
      }
      SetDisplayJob(appliedJob);
    }
  }, [jobs]);
  return (
    <div>
      <div className="job-details-header">
        <h1>Applied Jobs</h1>
      </div>
      {displayJob.map((job) => (
        <AppliedJobDetails key={job.id} job={job}></AppliedJobDetails>
      ))}
    </div>
  );
};

export default AppliedJobs;
