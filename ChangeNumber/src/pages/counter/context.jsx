
import { useState, createContext, useContext } from 'react';

const CounterContext = createContext(null)

const ConterContextProvider = ({ children }) => (
    <CounterContext.Provider value={useState(0)}>
        {children}
    </CounterContext.Provider>
)


const Container = () => (
    <div>
        <AddOneButton />
    </div>
)


const AddOneButton = () => {
    const [, setCounter] = useContext(CounterContext)
    return (
        <div>
            <button onClick={() => setCounter((prevNumber) => prevNumber + 1)}>Mudar número</button>
        </div>
    )
}
const Counter = () => {
    const [counter] = useContext(CounterContext)

    return (

        <div>Número: {counter} </div>
    )
}

const AddName = () => {
    const [name, setName] = useContext(CounterContext)

    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </div>
    )
}


const Name = () => {
    const [name] = useContext(CounterContext)

    return (
        <h2>Meu nome é {name}</h2>
    )
}

export default function CounterUseContext() {


    return (
        <ConterContextProvider>
            < Name />
            <AddName />
            <Counter />
            <Container />
        </ConterContextProvider>)

}


