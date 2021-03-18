import React from "react"
import './App.css';
import Worker from './components/work';

function App( props) {
  return (
    <div >
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <Worker/>
    
    </div>
  );
}

export default App;
