import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const initialNotes = [];
  const [notes, setNotes] = useState(initialNotes);

  // Get All Notes from Database
  const getAllNotes = async () => {
    // API Call - fetch all Notes:
    try {
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjkxNDZmYzY1YmFkNzg3ODA3NzkxYzBjIn0sImlhdCI6MTc2Mjk0NzMxNX0.CEfU8r8YlOSaYiK39J2qFG4aAcmmdOVAQz_UvPq8gFk",
        },
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const result = await response.json();
      console.log(result);
      // Client Side Logic - fetch all Notes:
      setNotes(result); //addes new note and return the new array of notes. We intentially do not used push here
    } catch (error) {
      console.error(error.message);
    }
  };

  // Add a New Note
  const addNote = async (title, description, tag) => {
    // API Call - Add a Note:
    try {
      const data = {
        title,
        description,
        tag,
      };

      const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjkxNDZmYzY1YmFkNzg3ODA3NzkxYzBjIn0sImlhdCI6MTc2Mjk0NzMxNX0.CEfU8r8YlOSaYiK39J2qFG4aAcmmdOVAQz_UvPq8gFk",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const result = await response.json();
      console.log(result);
      // Client Side Logic - fetch all Notes:
      getAllNotes(); // to get latest notes from server. To keep single copy of notes displayed and stored(self-coded).
    } catch (error) {
      console.error(error.message);
    }
  };

  // Delete an Existing Note
  const deleteNote = async (id) => {
    // API Call - Add a Note:
    try {
      console.log(id);
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjkxNDZmYzY1YmFkNzg3ODA3NzkxYzBjIn0sImlhdCI6MTc2Mjk0NzMxNX0.CEfU8r8YlOSaYiK39J2qFG4aAcmmdOVAQz_UvPq8gFk",
        },
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const result = await response.json();
      console.log(result);
      // Client Side Logic - fetch all Notes:
      getAllNotes(); // to get latest notes from server. To keep single copy of notes displayed and stored(self-coded).
    } catch (error) {
      console.error(error.message);
    }
  };

  // Edit an Existing Note
  const editNote = (id) => {
    console.log(id);
  };
  return (
    <NoteContext.Provider
      value={{ notes, getAllNotes, addNote, deleteNote, editNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
