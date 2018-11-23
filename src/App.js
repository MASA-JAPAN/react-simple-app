import React from 'react';

const App = () => {
  const profiles = [
    {name: "Taro",age:10},
    {name: "Hanako",age:20},
    {name: "taketa"}

  ]
  return (
  
  <div>
    {
      profiles.map((profiles,index)=>{
        return <User name = {profiles.name} age = {profiles.age} key={index}/>
      })
    }

  </div>

  )

}

const User = (props) => {

  return <div>Hi, I am {props.name}, {props.age} yeas old !</div>

}

User.defaultProps = {

  age:1

}

export default App;
