import React,{useState}from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";


function App() {

  const [Tasks,setTasks]=useState(TASKS)
  const [isActive,setIsActive]=useState({
    All:false, 
    Code:false,
    Food:false,
    Money: false,
    Misc:false
  })
  


  function remove(deleteTask){
    const newTask=Tasks.filter((task)=>{ return task.text !== deleteTask})
    setTasks(newTask)
  }

  function filterTasks(category){
    for (const key in isActive) {
      if(key===category){
        isActive[key]=true;
      }
      else isActive[key]=false;
    }
    
    setIsActive(isActive=>({...isActive}))
    
    const newTask=TASKS.filter((task)=>{ if(category==="All"){return true} else{return task.category === category}})
    setTasks(newTask)
    
  }

  
  function TaskFormSubmit(newElement){
    
    setTasks(Tasks=>[...Tasks,newElement])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter Categories={CATEGORIES} filterTasks={filterTasks} isActive={isActive} />
      <NewTaskForm  Categories={CATEGORIES}  onTaskFormSubmit={TaskFormSubmit}/>
      <TaskList tasks={Tasks} remove={remove} />
    </div>
  );
}

export default App;
