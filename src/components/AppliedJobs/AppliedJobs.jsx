import React, { useEffect, useState } from "react";
import { getShoppingCart } from "../../utilities/fakeDb";
import { useLoaderData } from "react-router-dom";
import AppliedJobDetails from "../AppliedJobDetails/AppliedJobDetails";

const AppliedJobs = () => {
  // const [jobs, setJobs] = useState([]);
  const jobs = useLoaderData();
  const [applied, SetApplied] = useState([]);
  // console.log(applied);

  // useEffect(() => {
  //   fetch("jobs.json")
  //     .then((res) => res.json())
  //     .then((data) => setJobs(data));
  // }, []);
  useEffect(() => {
    const storedJobs = getShoppingCart();
    let savedApplied = [];

    for (const id in storedJobs) {
      const idNumber = parseInt(id);
      // console.log(typeof id);
      const appliedJobs = jobs.find((job) => job.id === idNumber);
      if (appliedJobs) {
        const apply = storedJobs[id];
        appliedJobs.apply = apply;
        savedApplied.push(appliedJobs);
      }
    }
    SetApplied(savedApplied);
  }, [jobs]);
  return (
    <div>
      <div className="job-details-header">
        <h1>Applied Jobs</h1>
      </div>
      {applied.map((job) => (
        <AppliedJobDetails job={job}></AppliedJobDetails>
      ))}
    </div>
  );
};

export default AppliedJobs;
