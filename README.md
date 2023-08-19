# Adicionando Mais Um - Demonstração de Abordagens em React

Este repositório contém três páginas React que realizam a mesma tarefa: adicionar mais um a um contador numérico. Cada página utiliza uma abordagem diferente para gerenciar o estado da aplicação. As abordagens abordadas são: utilizando `useState`, `useContext` e `useReducer`.

## Abordagens

### 1. Utilizando `useState`

A página que utiliza `useState` utiliza um componente de função e gerencia o estado interno da contagem utilizando o hook `useState`.

```jsx
// Trecho de código da página que utiliza useState
import React, { useState } from 'react';

const CounterUsingState = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Contagem: {count}</p>
      <button onClick={increment}>Adicionar Mais Um</button>
    </div>
  );
}

export default CounterUsingState;
```


### 2. Utilizando `useContext`

A página que utiliza useContext utiliza um contexto para compartilhar o estado da contagem entre componentes.

```jsx
// Trecho de código da página que utiliza useContext

import React, { createContext, useContext } from 'react';

const CounterContext = createContext(null);

const CounterContextProvider = ({ children }) => (
  <CounterContext.Provider value={useState(0)}>
    {children}
  </CounterContext.Provider>
);

const CounterUsingContext = () => {
  const [count] = useContext(CounterContext);

  return (
    <div>
      <p>Contagem: {count}</p>
      <button>Adicionar Mais Um</button>
    </div>
  );
}

export default CounterUsingContext;
```
### 3. Utilizando `useReducer`

A página que utiliza useReducer utiliza o hook useReducer para gerenciar o estado da contagem através de um reducer.

```jsx

// Trecho de código da página que utiliza useReducer
import React, { useReducer } from 'react';

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

const CounterUsingReducer = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <p>Contagem: {count}</p>
      <button onClick={() => dispatch({ type: 'add' })}>Adicionar Mais Um</button>
    </div>
  );
}

export default CounterUsingReducer;
```

## Executando o Projeto
Para executar qualquer uma das abordagens, siga os passos a seguir:

-Clone este repositório.
-Navegue para a pasta da abordagem desejada.
-Execute npm install para instalar as dependências.
-Execute npm start para iniciar a aplicação.
-Escolha a abordagem que melhor se adapta às suas necessidades e explore como cada uma delas lida com o gerenciamento de estado em uma aplicação React.


