import React from 'react'
import HomeChild from './HomeChild'

const Home = (props) => {
  return (
    <div>
        value is : {props.value}
      <h1>this is my home page</h1>
      <HomeChild value={props.value}/>
      <br/>
      obj value name is{props.obj.name}
      <br/>
      obj value age is{props.obj.age}
      <br/>
      array is :{props.arr[0]}
      <img src="image.jsp" alt="" width="100%" height="100%"></img>
    </div>
  )
}

export default Home
