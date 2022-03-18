import React from "react";

function CategoryFilter({Categories,filterTasks,isActive}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {Categories.map((Category)=>{return <button className={isActive[Category]?"selected":null} onClick={()=>{filterTasks(Category)}} key={Category} name={Category}>{Category}</button>})}
    </div>
  );
}

export default CategoryFilter;
