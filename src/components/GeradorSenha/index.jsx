import "./GeradorSenha.css";
import {useState} from "react";


const GeradorSenha = () => {
    const [senha, setSenha] = useState("");
    const [tamanho, setTamanho] = useState(8);
    const [incluiNumeros, setIncluiNumeros] = useState(false);
    const [incluiSimbolos, setIncluiSimbolos] = useState(false);

    const geraSenha = () => {
        const numbers = '0123456789';
        const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
        const lowercase = 'abcdefghijklmnopqrstuvwxyz';
        const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        let allChars = lowercase + uppercase;
        if (incluiNumeros) {
            allChars += numbers;
        }
        if (incluiSimbolos) {
            allChars += symbols;
        }

        let generatedPassword = '';
        for (let i = 0; i < tamanho; i++) {
            const randomIndex = Math.floor(Math.random() * allChars.length);
            generatedPassword += allChars[randomIndex];
        }
        setSenha(generatedPassword);
    }

    const copiarSenha = () => {
        navigator.clipboard.writeText(senha);
        alert("Sua senha foi copiada para a área de transferência");
    }

    return (
        <div className="gerador-senha">
            <h1>Gerador de Senhas</h1>
            <div>
                <label htmlFor="tamanho">
                    Tamanho da Senha
                    <input
                        type="number"
                        name="tamanho"
                        id="tamanho"
                        value={tamanho}
                        onChange={(e) => setTamanho(e.target.value)}/>
                </label>
                <label htmlFor="incluiNumeros">
                    Incluir Números
                    <input
                        type="checkbox"
                        name="incluiNumeros"
                        id="incluiNumeros"
                        value={incluiNumeros}
                        onChange={(e) => setIncluiNumeros(e.target.checked)}/>
                </label>
                <label htmlFor="incluiSimbolos">
                    Incluir Símbolos
                    <input
                        type="checkbox"
                        name="incluiSimbolos"
                        id="incluiSimbolos"
                        value={incluiSimbolos}
                        onChange={(e) => setIncluiSimbolos(e.target.checked)}/>
                </label>
                <button type="button" onClick={geraSenha}>Gerar Senha</button>
                <div>
                    <input type="text" value={senha} readOnly={true}/>
                    <button type="button" onClick={copiarSenha}>Copiar</button>
                </div>
            </div>

        </div>
    )
}

export default GeradorSenha;