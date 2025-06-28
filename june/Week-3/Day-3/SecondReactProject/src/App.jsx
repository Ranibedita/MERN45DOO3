
import './App.css'
import Home from './Components/Home'

function App() {

  let a=30;
  let str="xyz"
  

  let obj ={
    name:"xy",
    age:20,
  }
  let arr=[1,2,3,4,5]

  return (
    <>
    <h1>hello react</h1>
      <Home value={a} str={str} obj={obj} arr={arr}/>
    </>
  )
}

export default App
