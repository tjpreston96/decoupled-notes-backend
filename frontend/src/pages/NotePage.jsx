import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";

const NotePage = () => {
  const [note, setNote] = useState(null);
  let params = useParams();
  let history = useNavigate();

  useEffect(() => {
    getNote();
  }, [params.id]);

  let getNote = async () => {
    let response = fetch(`/api/notes/${params.id}/`);
    let data = await (await response).json();
    setNote(data);
  };

  let updateNote = async () => {
    fetch(`/api/notes/${params.id}/update/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  };

  let handleSubmit = () => {
    updateNote();
    history("/");
  };

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <ArrowLeft onClick={handleSubmit} />
        </h3>
      </div>
      <textarea
        onChange={(e) => {
          setNote({ ...note, body: e.target.value });
        }}
        defaultValue={note?.body}
      />
    </div>
  );
};

export default NotePage;
