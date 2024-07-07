// 6. **Mostrar/Ocultar Texto:** Crie um botão que mostra ou oculta um texto em
// um componente ao ser clicado.
import {useState} from "react";
import "./ShowHideText.css";

const ShowHideText = () => {
    const [displayText, setDisplayText] = useState("block");

    const toggleDisplay = () => {
        const newDisplay = displayText === "block" ? "none" : "block";
        setDisplayText(newDisplay);
    }

    return (
        <div className="container">
            <div className="text-container">
                <p className="text" style={{display: displayText}}>Hello, world!</p>
            </div>
            <button type="button" onClick={toggleDisplay}>Mostrar/Esconder</button>
        </div>
    )
}

export default ShowHideText;