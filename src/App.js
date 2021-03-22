import React, { useState } from "react"

import Parent from "./components/parent"
import Valuecontext from"./components/valuecontex"

function App() {
  let [value,setValue]=useState(100)
  
  let number=81
  
  return (
    <Valuecontext.Provider value={number}>
    <div >
    <Parent  num={value} />
    
    </div>
    </Valuecontext.Provider>
  );
}

export default App;
