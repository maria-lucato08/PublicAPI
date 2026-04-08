import { useState } from "react";
import { LayoutAPI } from "../../layouts";

import styles from "./Colors.module.css";

const Colors = () => {
const [cor, setCor] = useState(null);

function coresAleatorias() {
const hex = Math.floor(Math.random() * 16777215).toString(16);
fetch(`https://www.thecolorapi.com/id?hex=${hex}`)
    .then(response => response.json())
    .then(data => {
    setCor({
        hex: data.hex.value,
        image: `https://www.thecolorapi.com/id?format=svg&hex=${hex}`
    });
    })
    .catch(error => {
    console.error("Erro ao buscar a cor:", error);
    });
}

    return(
        <LayoutAPI frase="as cores disponíveis" funcao={coresAleatorias}>
            {cor && (
                <div className={styles.apiColors}>
                <p>{cor.hex}</p>
                <img src={cor.image} width="200" />
                </div>
            )}
        </LayoutAPI>
    );
};

export { Colors };
