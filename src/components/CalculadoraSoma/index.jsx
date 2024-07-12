// 11. **Calculadora de Soma:** Crie um componente que
// aceita dois números como entrada e exibe a soma deles.

import {useState} from 'react';

const CalculadoraSoma = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [resultado, setResultado] = useState(0);

    const handleSum = () => {
        setResultado(num1 + num2);
    }

    return (
        <div>
            <h1>Calculadora de Soma</h1>
            <input type="number" value={num1} onChange={(e) => setNum1(Number(e.target.value))}/>
            <input type="number" value={num2} onChange={(e) => setNum2(Number(e.target.value))}/>
            <button onClick={handleSum}>Somar</button>
            <p>Resultado: {resultado}</p>
        </div>
    );
}

export default CalculadoraSoma;