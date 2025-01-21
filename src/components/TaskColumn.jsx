import React from "react";
import "./TaskColumn.css";
import TaskCard from "./TaskCard";

const TaskColumn = ({title,icon})=>{
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        <img src={icon} className="task_column_icon" alt="" /> {title}
      </h2>
      <TaskCard/>
    </section>
  );
};

export default TaskColumn;
