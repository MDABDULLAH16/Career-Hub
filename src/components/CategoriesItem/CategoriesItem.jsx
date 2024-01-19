import React from "react";

const CategoriesItem = ({ category }) => {
  const { category_name } = category;
  return (
    <div>
      <h2>{category_name}</h2>
    </div>
  );
};

export default CategoriesItem;
