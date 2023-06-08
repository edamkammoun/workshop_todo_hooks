import React, { useState } from "react";
import Modal from "react-modal";
const Edit = ({task,handleEdit}) => {
  const [editedAction, setEditedAction] = useState(task.action);
  const editedOne={
    id:task.id,action:editedAction,isDone:task.isDone
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
  
    handleEdit(editedOne)
    closeModal()
  }
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  Modal.setAppElement("#root");

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    // setEditedAction(editedOne.action)
  }
  return (
    <div>
      <button onClick={openModal}>Edit</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSubmit} >
          <input
            type="text"
            value={editedAction}
            onChange={(e) => setEditedAction(e.target.value)}
          />
          <span>
            <button type="submit" >Edit</button>
            <button onClick={closeModal} >Cancel</button>
          </span>
        </form>
      </Modal>
    </div>
  );
};

export default Edit;
