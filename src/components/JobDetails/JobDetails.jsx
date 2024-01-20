import React from "react";
import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const jobs = useLoaderData();
  console.log(jobs);
  return (
    <div>
      <h1>Job Details</h1>
      <h1>{jobs.company_name}</h1>
    </div>
  );
};

export default JobDetails;
