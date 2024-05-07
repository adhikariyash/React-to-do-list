import React, { useState } from "react";
function TODO() {
  const [tasks, setTask] = useState([]);
  const [newTasks, setNewTask] = useState("");

  function changeInput(event) {
    setNewTask(event.target.value);
  }

  function addTasks(e) {
      if(newTasks.trim() !== ""){
        setTask(t => [...t, newTasks]);
        setNewTask("")
      }
     
      }
  function removeTasks(index) {
    setTask(tasks.filter((_, i) => i !== index))
  }
  return (
    <>
      <div className="toDo-box">
        <h2>To-Do List</h2>

        <div className="taskArea">
 <div className="addBtnInput">
          <input
            type="text"
            placeholder="Add Tasks"
            value  = {newTasks}
            onChange= {changeInput}
          />

          <button className="add-btn" onClick={addTasks}>Add</button>
          </div>
          <ul className="order">

          {tasks.map((tasks, index) =>
             <li key={index}>{tasks}

          <button className="remove-btn" onClick={() => removeTasks(index)}>
            Delete
            </button>
          </li>)}
          
          </ul>
        </div>
      </div>
    </>
  );
}
export default TODO;
