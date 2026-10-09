import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Counter from './Count'

function App() {
  const [count, setCount] = useState(0)
  function handel (){
    alert('button click')
  }
 
 const handelClick2 = ()=>{
   alert('button clcik 2')
 }
  return (
    <>
      
          <h1>Get started</h1>
<Counter></Counter>

          <div> 
            <button onClick={handel}>Click Me</button>
           <button onClick={handelClick2}>Click Me 2</button>
           <button onClick={()=>{ alert('third click')}}>Third Button</button>
          </div>

          
 </>
  )
}

export default App
