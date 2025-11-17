import React, { useContext } from "react";
import notesContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";

const Notes = () => {
  const context = useContext(notesContext);
  const { notes, setNotes } = context;
  return (
    <div>
      <AddNote />
      <div className="container my-3">
        <h2>All Notes</h2>
        <div className="row">
          {notes.map((note) => {
            return <Noteitem key={note._id} note={note} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Notes;
