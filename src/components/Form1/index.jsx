import "./Form1.css"
import {useState} from "react";
// 3. **Formulário de Texto:** Crie um formulário com um campo de texto que atualiza o
// estado com o valor atual do campo.

const Form1 = () => {
    const [nome, setNome] = useState("");
    return (
        <div>
            <form>
                <label htmlFor="nome">
                    Nome:
                    <input
                        type="text"
                        placeholder="Digite o seu nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </label>
                <p>Resultado: {nome}</p>
            </form>
        </div>
    )
}

export default Form1;