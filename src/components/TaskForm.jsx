import React, { useState } from "react";
import "./TaskForm.css";
import { Tag } from "./Tag";

const TaskForm = () => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "Todo", 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData); 
  };

  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          name="task"
          onChange={handleChange}
          type="text"
          className="task_input"
          placeholder="Enter Your Task"
        />
        <div className="task_form_bottom_line">
          <div>
            <Tag tagName="HTML" />
            <Tag tagName="CSS" />
            <Tag tagName="JavaScript" />
            <Tag tagName="React" />
          </div>
          <div>
            <select
              className="task_status"
              name="status"
              value={taskData.status} 
              onChange={handleChange} 
            >
              <option value="Todo">ToDo</option>
              <option value="Doing">Doing</option>
              <option value="Done">Done</option>
            </select>
            <button type="submit" className="task_submit">
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
