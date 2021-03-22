import React from "react"
import Child  from "./child"
import Child2 from "./child2"


function Parent(props) {
  
  
  return (
    <div >
     <Child  num={props.num}/>  
     <Child2/>
    </div>
  );
}

export default Parent;
