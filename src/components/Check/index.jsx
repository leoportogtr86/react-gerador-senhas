// 4. **Checkbox:** Crie um componente com um checkbox que altera o estado entre verdadeiro e falso conforme é clicado.
import {useState} from "react";

const Check = () => {
    const [marcado, setMarcado] = useState(false);
    return (
        <div>
            <form>
                <label>
                    Marcado:
                    <input
                        type="checkbox"
                        checked={marcado}
                        onChange={(e) => setMarcado(e.target.checked)}
                    />
                </label>
                {marcado ? <p>Marcado</p> : <p>Não Marcado</p>}
            </form>
        </div>
    )
}

export default Check;