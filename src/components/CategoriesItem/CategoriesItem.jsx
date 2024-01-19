import React from "react";

const CategoriesItem = ({ category }) => {
  console.log(category);
  const { category_name, availability, logo } = category;
  return (
    <div>
      <img src={logo} alt="" />
      <h2>{category_name}</h2>
      <p>{availability}</p>
    </div>
  );
};

export default CategoriesItem;
