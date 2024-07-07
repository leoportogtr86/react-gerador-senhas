// 5. **Alternar Cor de Fundo:** Crie um botão que, quando clicado, alterna a cor de fundo de
// um div entre duas cores diferentes.
import "./ChangeColor.css";
import {useState} from "react";

const ChangeColor = () => {
    const [divColor, setDivColor] = useState("lightblue");

    const toggleColor = () => {
        const color = divColor === "lightblue" ? "blue" : "lightblue";
        setDivColor(color);
    }

    return (
        <div className="container" style={{backgroundColor: divColor, width: "400px", height: "400px"}}>
            <button type="button" onClick={toggleColor}>Mudar Cor</button>
        </div>
    )
}

export default ChangeColor;