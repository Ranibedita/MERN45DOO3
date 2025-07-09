import { useEffect, useState } from "react";
import "./App.css";
import Home from "./Components/Home";

function App() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  // useEffect
  // syntax
  // useEffect(() => {
  //   // first
  //   // set of code for side effect

  //   return () => {
  //     // second
  //     // clear of  code
  //   }
  // }, [third])

  // case 1
  // useEffect will execute at every render
  // useEffect(()=>{
  //   console.log("useEffect")
  //   alert("it will execute at every render")
  // })

  // case 2
  // useEffect will execute at first render
  // useEffect(()=>{
  //   alert("it will execute at first render")
  // },[])

  // case 3
  // useEffect will execute based on dependencies
  // useEffect(()=>{
  //   alert("based dep")
  // },[count,total])

  // case 4
  // return statement
  // useEffect(()=>{
  //   alert("value updated")
  //   return()=>{
  //     alert("value removed")
  //   }
  // },[count])

  return (
    <>
      {/* <h1>Hello Qlith</h1>
      <h1>Count :{count}</h1>
      <button onClick={()=>setCount(count+1)}>Inc</button>
      <h1>Total {total}</h1>
      <button onClick={()=>setTotal(total+1)}>Inc Total</button> */}
      <Home />
    </>
  );
}

export default App;
