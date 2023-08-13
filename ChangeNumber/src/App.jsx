
import './App.css'
import { useState } from 'react'

function App() {
  const [name] = useState("Sarah")
  const [number, setNumber] = useState(1)
  const changeNumber = () => {
    setNumber(number + 1)
  }


  return (
    <div className='App'>
      <h2>Meu nome é {name}</h2>
      <div>
        <p>Número: {number}</p>
        <button onClick={changeNumber}>Mudar número</button>
      </div>

    </div>
  )
}

export default App
