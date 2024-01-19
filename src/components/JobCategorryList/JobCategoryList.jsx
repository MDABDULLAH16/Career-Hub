import React, { useEffect, useState } from "react";
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
      <h1> JobCategoryList is here {categories.length}</h1>
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
