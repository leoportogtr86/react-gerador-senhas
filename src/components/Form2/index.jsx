// 10. **Formulário de Múltiplos Campos:** Crie um formulário com vários campos
// (nome, e-mail, senha) e use o estado para armazenar os valores.
import {useState} from "react";
import "./Form2.css";

const Form2 = () => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nome, email, senha);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nome">
                    Nome:
                    <input
                        type="text"
                        name="nome"
                        id="nome"
                        placeholder="Digite o seu nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </label>
                <label htmlFor="email">
                    Email:
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Digite o seu e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label htmlFor="senha">
                    Senha:
                    <input
                        type="password"
                        name="senha"
                        id="senha"
                        placeholder="Digite a sua senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                </label>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Form2;