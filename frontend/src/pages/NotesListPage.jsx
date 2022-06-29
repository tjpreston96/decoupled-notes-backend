import React, { useState, useEffect } from "react";

const NotesListPage = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  let getNotes = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/notes/");
    let data = await response.json();
    console.log(`Data: ${data}`);
    setNotes(data);
  };

  return (
    <div>
      Notes
      <div className="notes-list">
        {notes.map((note, index) => {
          return <h3 id={index}> {note.body} </h3>;
        })}
      </div>
    </div>
  );
};

export default NotesListPage;
