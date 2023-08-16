
import { useState } from 'react';

const Container = ({ setCounter }) => (
  <div>
    <AddOneButton setCounter={setCounter} />
  </div>
)


const AddOneButton = ({ setCounter }) => (
  <div>
    <button onClick={() => setCounter((prevNumber) => prevNumber + 1)}>Mudar número</button>
  </div>
)


const AddName = ({ name, setName }) => (
  <div>
    <input type="text" value={name} onChange={e => setName(e.target.value)} />
  </div>
)

const Counter = ({ counter }) => (
  <p>Número: {counter}</p>
)

const Name = ({ name }) => (
  <h2>Meu nome é {name}</h2>
)

export default function CounterUseContext() {

  const [counter, setCounter] = useState(0)
  const [name, setName] = useState("Sarah")

  return (
    <div className='App'>
      <Name name={name} />
      <AddName name={name} setName={setName} />
      <Counter counter={counter} />
      <Container setCounter={setCounter} />
    </div>
  )
}


