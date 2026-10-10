import { useState } from "react"

export default function Counter (){
    const [ count, setCount] = useState(0)
    return (
       <div>
      <h1>{count}</h1>
 
      <button style={{border: '4px solid red '}} onClick={() => setCount(count + 1)}>
       +
      </button>
      <button style={{border: '4px solid red '}} onClick={()=> setCount(count -1)}>-</button>
    </div> 
      )
    }