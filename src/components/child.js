import React,{useContext} from "react"
import Valuecontex from "./valuecontex"



function Child(props) {
  
  let value=useContext(Valuecontex)
  return (
    <div >
    my age is {value[0]}  
    <button onClick={()=>{ value[1](++value[0]) }}>Increse age</button> 
    <button onClick={()=>{ value[1](--value[0])}}>decrease age</button>
    </div>
  );
}

export default Child;
