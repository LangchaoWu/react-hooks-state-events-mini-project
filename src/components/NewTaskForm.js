import React,{useState}from "react";

function NewTaskForm({Categories,onTaskFormSubmit}) {
  const [formData,setFormData]=useState({text:"",category:"Code"})
  
  function handleChange(e){
    // setFormData(formData=>({...formData,[e.target.name]:e.target.value}))
    setFormData(function(formData){
      return {...formData,[e.target.name]:e.target.value}
    })
  }
  function handleSubmit(e){
    e.preventDefault();
   
    onTaskFormSubmit(formData)
  }
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={formData.text} onChange={handleChange}/>
      </label>
      <label>
        Category
        <select name="category" value={formData.category} onChange={handleChange}>
          {Categories.map((category)=> {if(category==='All'){return null} else{return<option key={category} value={category}>{category}</option>}})}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
