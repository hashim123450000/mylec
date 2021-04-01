import React, { useEffect, useState } from 'react';


function App() {
  let url= 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
  let data = { type: "waiting for data" }
  const [todo,setTodo]=useState(data)
  useEffect(() => {
    async function Data() {
      const response = await fetch(url)
      console.log("response =", response)
     let data2= await response.json()
     
     setTodo(data2)
     console.log("data =",data2)
    }
    Data();
  })
  return (

    <div>
      hello {todo.type}
    </div>
  );
}

export default App;

