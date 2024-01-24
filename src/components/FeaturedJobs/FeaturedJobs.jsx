import React, { useEffect, useState } from "react";
import Job from "../Job/Job";
import "./FeaturedJobs.css";

const FeaturedJobs = () => {
  const [Jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 3) {
          setJobs(data);
        }
      });
  }, []);
  return (
    <div>
      <div className="categories-title">
        <h1>Featured Jobs</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="job-post-container">
        {Jobs.map((job) => (
          <Job job={job} key={job.id}></Job>
        ))}
      </div>
      <div className="see-all">
        <button className="btn-see-all">See All Jobs</button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
