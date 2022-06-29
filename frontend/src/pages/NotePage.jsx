import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
    <h1>
      <p>
        {note?.body} {params.id}
      </p>
    </h1>
  );
};

export default NotePage;
