import React, { useEffect, useState } from "react";
import "./JobCategoryList.css";
import CategoriesItem from "../CategoriesItem/CategoriesItem";

const JobCategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <div className="categories-title">
        <h1> JobCategoryList is here {categories.length}</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div>
        {categories.map((category) => (
          <CategoriesItem
            category={category}
            key={category.id}
          ></CategoriesItem>
        ))}
      </div>
    </div>
  );
};

export default JobCategoryList;
