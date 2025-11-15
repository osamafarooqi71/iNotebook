import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const initialNotes = [
    {
      _id: "6915c510ba63bc438bd2668c",
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
      _id: "6915c510ba63bc438bd2668e",
      userId: "69146fc65bad787807791c0c",
      title: "My title",
      description: "Description foes here....",
      tag: "Personal",
      date: "2025-11-13T11:46:24.792Z",
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
      _id: "6915c510ba63bc438bd2668e",
      userId: "69146fc65bad787807791c0c",
      title: "My title",
      description: "Description foes here....",
      tag: "Personal",
      date: "2025-11-13T11:46:24.792Z",
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
      _id: "6915c510ba63bc438bd2668e",
      userId: "69146fc65bad787807791c0c",
      title: "My title",
      description: "Description foes here....",
      tag: "Personal",
      date: "2025-11-13T11:46:24.792Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(initialNotes);
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
