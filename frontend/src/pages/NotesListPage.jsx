import React, { useState, useEffect } from "react";
import ListItem from "../components/ListItem/ListItem";

const NotesListPage = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  let getNotes = async () => {
    let response = await fetch("api/notes/");
    let data = await response.json();
    console.info(`Data: ${data}`);
    setNotes(data);
  };

  return (
    <div>
      Notes
      <div className="notes-list">
        {notes.map((note, index) => {
          return <ListItem note={note} key={index} />;
        })}
      </div>
    </div>
  );
};

export default NotesListPage;
