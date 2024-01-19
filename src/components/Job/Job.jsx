import React from "react";

const Job = ({ job }) => {
  const {
    logo,
    comopany_name,
    location,
    job_type,
    salary,
    remote_or_onsite,
    job_title,
  } = job;
  return (
    <div>
      <img src={logo} alt="" />
      <h2>{job_title}</h2>
      <p>{comopany_name}</p>
      <p>{remote_or_onsite}</p>
      <p>{job_type}</p>
      <p>{location}</p>
      <p>{salary}</p>
    </div>
  );
};

export default Job;
