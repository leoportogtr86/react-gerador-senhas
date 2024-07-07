// 7. **Lista de Itens:** Crie um componente que permite adicionar
// itens a uma lista e exibe esses itens.
import {useState} from "react";
import "./Lista.css";

const Lista = () => {
    const [lista, setLista] = useState([]);
    const [item, setItem] = useState("");

    const addItem = () => {
        if (item.trim() === "") {
            return;
        }
        setLista([...lista, item]);
    }

    return (
        <div className="container">
            <h1>Criando Listas com React</h1>
            <label>
                Adicione itens a sua lista
                <input
                    type="text"
                    placeholder="Incluir um item"
                    value={item}
                    onChange={(e) => setItem(e.target.value)}
                />
            </label>
            <button onClick={addItem} type="button">Adicionar</button>
            <ul className="lista">
                {
                    lista.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Lista;