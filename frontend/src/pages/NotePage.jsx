import React from "react";
import { useParams } from "react-router-dom";

const NotePage = () => {
  let params = useParams();
  return <h1>Single Note {params.id}</h1>;
};

export default NotePage;
