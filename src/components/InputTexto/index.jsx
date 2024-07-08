import { useState } from 'react';

function InputTexto() {
    const [texto, setTexto] = useState('');

    return (
        <div>
            <input type="text" value={texto} onChange={(e) => setTexto(e.target.value)}/>
            <button type="button" onClick={() => setTexto("")}>Limpar Caracteres</button>
            <p>Você digitou: {texto}</p>
            <p>Comprimento da string: {texto.length}</p>
        </div>
    );
}

export default InputTexto;
