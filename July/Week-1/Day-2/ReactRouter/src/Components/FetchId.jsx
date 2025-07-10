import React from "react";
import { useParams } from "react-router";

function FetchId() {
  let { id } = useParams();
  return (
    <div>
      <h1>This is my fetch is page</h1>
      <h1>ID is {id}</h1>
    </div>
  );
}

export default FetchId;
