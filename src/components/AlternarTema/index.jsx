import {useEffect, useState} from 'react';

function AlternarTema() {
    const [temaEscuro, setTemaEscuro] = useState(false);

    useEffect(() => {
        localStorage.setItem("temaEscuro", `${temaEscuro}`);
    }, [temaEscuro]);

    const estilo = {
        backgroundColor: temaEscuro ? '#333' : '#FFF',
        color: temaEscuro ? '#FFF' : '#000',
        padding: '10px',
        textAlign: 'center',
    };

    return (
        <div style={estilo}>
            <p>Este é um exemplo de alternância de tema.</p>
            <button onClick={() => setTemaEscuro(!temaEscuro)}>
                Alternar para {temaEscuro ? 'Claro' : 'Escuro'}
            </button>
        </div>
    );
}

export default AlternarTema;