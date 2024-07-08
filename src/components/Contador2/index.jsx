import {useState} from 'react';

function Contador2() {
    const [contador, setContador] = useState(0);

    return (
        <div>
            <p>Contagem: {contador}</p>
            <button onClick={() => setContador(contador + 1)}>Incrementar</button>
            <button onClick={() => setContador(contador - 1)}>Decrementar</button>
            <button onClick={() => setContador(0)}>Resetar</button>
        </div>
    );
}

export default Contador2;
