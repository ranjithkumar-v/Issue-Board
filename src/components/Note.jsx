import React from "react";
function Note(props) {
  function handledelete() {
    props.onDelete(props.id);
  }
  return (
    <div>
      
    <div className="note">
       <h1>{props.title}</h1>
       <p>{props.content}</p>
       <button onClick={handledelete}>
       <p>Delete</p>
       </button>
    </div>
    </div>
  );
}

export default Note;
