import {useState} from 'react';
import "./ControleVisibilidade.css";

function ControleVisibilidade() {
    const [visivel, setVisivel] = useState(true);
    const [visibilidade, setVisibilidade] = useState("show");
    const mudarVisibilidade = () => {
        setVisibilidade(visibilidade === "show" ? "hide" : "show");
    }
    return (
        <div>
            <button onClick={() => setVisivel(!visivel)}>Toggle Visibilidade</button>
            {visivel && <p>Este é um texto visível.</p>}
            <div id="blue" className={visibilidade}></div>
            <button onClick={mudarVisibilidade} type="button">Exibir/Ocultar</button>
        </div>
    );
}

export default ControleVisibilidade;

// #### Requisitos:
//     - Adicionar um botão para exibir/ocultar um elemento adicional (por exemplo, uma imagem).
// - Adicionar uma animação de transição ao exibir/ocultar os elementos.
