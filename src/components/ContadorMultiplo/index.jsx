// 9. **Contador Múltiplo:** Crie três contadores independentes no mesmo componente,
// cada um com seu próprio estado.
import {useState} from "react";

const ContadorMultiplo = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);

    return (
        <div>
            <h1>Contador Múltiplo</h1>
            <div className="contador1">
                <p>{count1}</p>
                <button type="button" onClick={() => setCount1(prevState => prevState + 1)}>Contador 1</button>
            </div>
            <div className="contador2">
                <p>{count2}</p>
                <button type="button" onClick={() => setCount2(prevState => prevState + 1)}>Contador 2</button>
            </div>
            <div className="contador3">
                <p>{count3}</p>
                <button type="button" onClick={() => setCount3(prevState => prevState + 1)}>Contador 3</button>
            </div>
        </div>
    )
}

export default ContadorMultiplo;