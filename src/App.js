import { useState } from "react";
import "./App.css";
import TaskList from "./Components/TaskList";
import AddNewTask from "./Components/AddNewTask";

function App() {
  const [list, setList] = useState([
    {
      id: Math.random(),
      action: "Wake Up",
      isDone: true,
    },
    {
      id: Math.random(),
      action: "Go Out",
      isDone: false,
    },
  ]);
  //handleDelete
  const handleDelete = (ID) => setList(list.filter((el) => el.id !== ID));
  // complete task
  const handleComplete = (THEID) =>
    setList(
      list.map((el) => (el.id === THEID ? { ...el, isDone: !el.isDone } : el))
    );
  //   add new Task
  const handleAdd = (newTask) => setList([...list, newTask]);
  const handleEdit = (editedTask) =>
    setList(list.map((el) => (el.id === editedTask.id ? editedTask : el)));
  return (
    <div className="App">
      <AddNewTask addFunction={handleAdd} />
      <TaskList
        tasks={list}
        deleteFunction={handleDelete}
        completeFunction={handleComplete}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default App;
