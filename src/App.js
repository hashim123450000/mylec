import React, { useState } from "react"

import Parent from "./components/parent"
import Valuecontext from"./components/valuecontex"

function App() {
 
  
  let value=useState(48)
  
  return (
    <Valuecontext.Provider value={value}>
    <div >
    <Parent  num={value} />
    
    </div>
    </Valuecontext.Provider>
  );
}

export default App;
