import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const initialNotes = [
    {
      _id: "6915c510ba63bc438bd2668c1",
      userId: "69146fc65bad787807791c0c",
      title: "My title",
      description: "Description foes here....",
      tag: "Personal",
      date: "2025-11-13T11:46:24.638Z",
      __v: 0,
    },
    {
      _id: "6915c510ba63bc438bd2668e",
      userId: "69146fc65bad787807791c0c",
      title: "My title",
      description: "Description foes here....",
      tag: "Personal",
      date: "2025-11-13T11:46:24.792Z",
      __v: 0,
    },
    {
      _id: "6915c510ba63bc438bd2668e2",
      userId: "69146fc65bad787807791c0c",
      title: "My title",
      description: "Description foes here....",
      tag: "Personal",
      date: "2025-11-13T11:46:24.792Z",
      __v: 0,
    },
    {
      _id: "6915c510ba63bc438bd2668e3",
      userId: "69146fc65bad787807791c0c",
      title: "My title",
      description: "Description foes here....",
      tag: "Personal",
      date: "2025-11-13T11:46:24.792Z",
      __v: 0,
    },
    {
      _id: "6915c510ba63bc438bd2668e4",
      userId: "69146fc65bad787807791c0c",
      title: "My title",
      description: "Description foes here....",
      tag: "Personal",
      date: "2025-11-13T11:46:24.792Z",
      __v: 0,
    },
    {
      _id: "6915c510ba63bc438bd2668e5",
      userId: "69146fc65bad787807791c0c",
      title: "My title",
      description: "Description foes here....",
      tag: "Personal",
      date: "2025-11-13T11:46:24.792Z",
      __v: 0,
    },
    {
      _id: "6915c510ba63bc438bd2668e6",
      userId: "69146fc65bad787807791c0c",
      title: "My title",
      description: "Description foes here....",
      tag: "Personal",
      date: "2025-11-13T11:46:24.792Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(initialNotes);

  // Add a note
  const addNote = (title, description, tag) => {
    const note = {
      _id: "6915c510ba63bc438bd2668e6",
      userId: "69146fc65bad787807791c0c",
      title: title,
      description: description,
      tag: tag,
      date: "2025-11-13T11:46:24.792Z",
      __v: 0,
    };

    setNotes(notes.concat(note)); //addes new note and return the new array of notes. We intentially do not used push here
  };

  // Delete a note
  const deleteNote = () => {};
  // Edit a note
  const editNote = () => {};
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
