import React from "react";
import "./TaskColumn.css";

const TaskColumn = ({title,icon})=>{
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        <img src={icon} className="task_column_icon" alt="" /> {title}
      </h2>
    </section>
  );
};

export default TaskColumn;
