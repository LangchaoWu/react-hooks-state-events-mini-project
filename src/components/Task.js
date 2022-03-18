import React from "react";


function Task({text,category,remove}) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={()=>{remove(text)}} className="delete">X </button>
    </div>
  );
}

export default Task;
