import React,{useContext} from "react"
import Valuecontex from "./valuecontex"



function Child(props) {
  
  let value=useContext(Valuecontex)
  return (
    <div >
    my age is {value}   
    </div>
  );
}

export default Child;
