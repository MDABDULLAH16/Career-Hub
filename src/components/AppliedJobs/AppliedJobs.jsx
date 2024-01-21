import React, { useEffect, useState } from "react";
import { getShoppingCart } from "../../utilities/fakeDb";
import { useLoaderData } from "react-router-dom";

const AppliedJobs = () => {
  const [jobs, setJobs] = useState([]);
  // const jobs = useLoaderData();
  const [applied, SetApplied] = useState([]);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  useEffect(() => {
    const storedJobs = getShoppingCart();
    for (const id in storedJobs) {
      // console.log(typeof id);
      const appliedJobs = jobs.find((job) => job.id == id);
      const newAppliedJob = [...applied, appliedJobs];
      SetApplied(newAppliedJob);
    }
  }, [jobs]);
  return (
    <div>
      <h1>Applied Jobs will be here!! {applied.length}</h1>
    </div>
  );
};

export default AppliedJobs;
