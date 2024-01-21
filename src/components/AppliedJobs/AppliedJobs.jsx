import React, { useEffect, useState } from "react";
import { getShoppingCart } from "../../utilities/fakeDb";
import { useLoaderData } from "react-router-dom";

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
  return <div>{<h1>Applied Jobs will be here!! </h1>}</div>;
};

export default AppliedJobs;
