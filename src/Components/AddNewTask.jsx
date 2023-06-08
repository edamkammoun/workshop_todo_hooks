import React, { useState } from "react";

const AddNewTask = ({ addFunction }) => {
  const [newAction, setNewAction] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault()
    const newOne = {
      id: Math.random(),
      action: newAction,
      isDone: false,
    };
    addFunction(newOne)
    setNewAction("")
  };
  return (
    <div>
      <form onSubmit={handleSubmit} >
        <input
          type="text"
          value={newAction}
          onChange={(e) => setNewAction(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddNewTask;
