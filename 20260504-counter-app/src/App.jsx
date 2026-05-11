import { useState } from 'react'

function App() {

  const [counter, setCounter] = useState(1)

  function onBtnClick() {
    
    setCounter(counter + 1)
  }

  return (
    <>
      <h1>Contador</h1>

      <button onClick={onBtnClick}>
        {counter}
      </button>
    </>
  )
}

export default App