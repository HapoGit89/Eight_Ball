import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
import './Eightball.css'
import Eightball from './Eightball';
const array = require ('./array')


function App() {
  const [status, setStatus] = useState(true);  // true if eightball is in question state
  const [object, setObject] = useState({msg:"Think of a question", color: "black"});
  function handleClick(){
    console.log("click")
    if (status===false){
      setObject({msg:"Think of a question", color: "black"})
      setStatus(true)
    }
    else {
      const randArrayInd = Math.floor(Math.random()*(array.length-1))
      setObject(array[randArrayInd])
      setStatus(false)
    }
  }
  
  return (
    <div className="App" onClick={handleClick}>
      <Eightball object={object} /> 
    </div>
  );
}

export default App;
