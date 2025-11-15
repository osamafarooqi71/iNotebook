import React, { useContext } from "react";
import notesContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";

const Notes = () => {
  const context = useContext(notesContext);
  const { notes, setNotes } = context;
  return (
    <div>
      <div className="container my-3">
        <h2>All Notes</h2>
        <div className="row">
          {notes.map((note) => {
            return <Noteitem note={note} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Notes;
