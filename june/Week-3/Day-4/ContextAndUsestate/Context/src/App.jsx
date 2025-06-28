
import { createContext } from 'react'
import './App.css'
import ChildOne from './Components/ChildOne'

let nameContext=createContext();
function App() {
  //create context object in globally
  //give a provider to the context object
  //pass  variable  though the provider
  //export yhe context object


  //how to access
  //using context we can access the context object



  let a=10

  return (
    <>
      <h1> Hello Qulith </h1>
      <nameContext.Provider value={"abc"}>
      <ChildOne/>
      </nameContext.Provider>

    </>
  )
}

export {nameContext}
export default App
