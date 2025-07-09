import { useState } from "react";
import "./App.css";

function App() {
  let [count, setcount] = useState(0);
  let a = 10;
  function handleClick() {
    // a = a + 1;
    // console.log("value :", a);
    setcount(count + 1);
  }
  function handleTheme() {
    console.log("theme execute");
    if (theme == "light") {
      setTheme("dark");
      console.log(theme);
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      setTheme("light");
      console.log(theme);
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }
  return (
    <>
      <h1>hello</h1>
      <h1>Value is : {count}</h1>
      <br />
      <button onClick={handleClick}>Inc</button>
      <button onClick={handleTheme}>toggle</button>
    </>
  );
}

export default App;
