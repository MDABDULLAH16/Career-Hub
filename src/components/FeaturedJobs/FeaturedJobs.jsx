import React, { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [Jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div>
      <div>
        <h1>Featured Jobs</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div>
        {Jobs.map((job) => (
          <Job job={job} key={job.id}></Job>
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
