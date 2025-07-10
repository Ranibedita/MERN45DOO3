import React from "react";
import { useNavigate } from "react-router";

function About() {
  let navigate = useNavigate();
  function handleClick() {
    navigate("/service");
  }

  return (
    <div>
      <h1>this is my about page</h1>
      <button onClick={handleClick}>go to service page</button>
    </div>
  );
}

export default About;
