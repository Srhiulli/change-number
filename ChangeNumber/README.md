Use State In [ React ](https://legacy.reactjs.org/docs/hooks-state.html)


Em React, o useState é um hook fundamental que permite que componentes funcionais tenham um estado interno.
Isso é importante, pois até a introdução dos hooks, apenas os componentes de classe podiam possuir estado. Com o useState, os componentes funcionais podem agora gerenciar seu próprio estado.

- Dois estados são definidos usando o useState:

name: Armazena o valor da string "Change Number Game" como inicial.

number: Armazena o valor numérico 1 como inicial.

A função changeNumber é definida para atualizar o estado number. Ela utiliza o valor anterior do estado (recebido como prevNumber) e adiciona 1 a ele.


