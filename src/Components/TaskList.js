import React from "react";
import TaskCard from "./TaskCard";

const TaskList = (props) => {
  return (
    <div>
      {React.Children.toArray(
        props.tasks.map((el) => (
          <TaskCard task={el} deleteMethode={props.deleteFunction} completeMethod={props.completeFunction} handleEdit={props.handleEdit}/>
        ))
      )}
    </div>
  );
};

export default TaskList;
