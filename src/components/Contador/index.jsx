import { useState } from "react";
import "./Contador.css"

//1. **Contador Simples:** Crie um componente de contador que incrementa o valor em 1 cada vez que um botão é clicado.
//2. **Decrementador:** Adapte o exercício do contador para incluir um botão que decrementa o valor em 1.

const Contador = () => {
    const [count, setCount] = useState(0);

    const inc = () => {
        setCount((prev) => prev + 1);
    }
    const dec = () => {
        setCount((prev) => prev - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return (
        <div className="contador">
            <p className="label">Contagem: {count}</p>
            <button className="dec" type="button" onClick={dec}>-</button>
            <button className="inc" type="button" onClick={inc}>+</button>
            <button className="reset" type="button" onClick={reset}>Reset</button>
        </div>
    )
}

export default Contador;