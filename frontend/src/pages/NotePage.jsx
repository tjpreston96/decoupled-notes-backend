import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";

const NotePage = () => {
  const [note, setNote] = useState(null);
  let params = useParams();

  useEffect(() => {
    getNote();
  }, [params.id]);

  let getNote = async () => {
    let response = fetch(`/api/notes/${params.id}/`);
    let data = await (await response).json();
    setNote(data);
  };

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <Link to="/">
            <ArrowLeft />
          </Link>
        </h3>
      </div>
      <textarea defaultValue={note?.body} />
    </div>
  );
};

export default NotePage;
