import React, { useState } from "react"
import './ap.css';


function App() {
  let [value,setValue]=useState(false)
  let [age,setAge]=useState(23)
  return (
    <div className={'room '+(value?"lit":"dark")} >
      this room is    {value?"lit":"dark"}
     <h1>{age}</h1>
     <button onClick={()=>{
       setValue(!value)
     }}>ROme</button>
     <button onClick={()=>{
       setAge(++age)
     }}>increse</button>
    
    </div>
  );
}

export default App;
