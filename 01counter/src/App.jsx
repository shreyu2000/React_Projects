import { useState } from 'react'

import './App.css'

function App() {
  let [count, setCount] = useState(0);

  return (
    <>
      <h1>React Counter : {count}</h1>

      <button className='bg-sky-500 hover:bg-sky-700 mb-2 mt-4' onClick={()=>setCount(++count)}>Increase</button>
      <br/>
      <button className='bg-sky-500 hover:bg-sky-700' onClick={()=>setCount(--count)}>Decrease</button>

    </>
  )
}

export default App
