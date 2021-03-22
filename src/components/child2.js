import React,{useReducer} from "react"
import numberReducer from "./numberReducer"


export default function Child2(){
    let [state,dispatch]=useReducer(numberReducer,53)
return <div>

Child {state}
<button onClick={()=>{dispatch({type:"INCREMENT"  })  }}>Increment</button>
<button onClick={()=>{dispatch({type:"DECREMENT"  })  }}>decrement</button>

</div>


}