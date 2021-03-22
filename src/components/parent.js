import React from "react"
import Child  from "./child"


function Parent(props) {
  
  
  return (
    <div >
     <Child  num={props.num}/>  
    </div>
  );
}

export default Parent;
