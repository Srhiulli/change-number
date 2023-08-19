
import { useReducer, createContext, useContext } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case "add":
            return state + 1;
        case "subtract":
            return state - 1;
        default:
            return state;

    }
}

const CounterContext = createContext(null)

const ConterContextProvider = ({ children }) => (
    <CounterContext.Provider value={useReducer(reducer, 0)}>
        {children}
    </CounterContext.Provider>
)


const Container = () => (
    <div>
        <AddOneButton />
        <SubtractOneButton />
    </div>
)


const SubtractOneButton = () => {
    const [, dispatch] = useContext(CounterContext)
    return (
        <div>
            <button
                onClick={() =>
                    dispatch({ type: "subtract" })}>
                Diminuir
            </button>
        </div >
    )
}


const AddOneButton = () => {
    const [, dispatch] = useContext(CounterContext)
    return (
        <div>
            <button
                onClick={() =>
                    dispatch({ type: "add" })}>
                Adicionar
            </button>
        </div >
    )
}

const Counter = () => {
    const [counter] = useContext(CounterContext)

    return (

        <div>Número: {counter} </div>
    )
}


export default function CounterUseContext() {


    return (
        <ConterContextProvider>
            <Counter />
            <Container />
        </ConterContextProvider>)

}


