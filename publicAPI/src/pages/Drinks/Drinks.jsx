import { useState } from "react";
import { MainLayout } from "../../layouts";

import styles from "./Drinks.module.css";

const Drinks = () => {
const [drinks, setDrinks] = useState(null);

function bebidasAleatorias() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then(response => response.json())
    .then(data => {
         const drink = data.drinks[0];
        setDrinks({
            name: drink.strDrink,
            image: drink.strDrinkThumb,
        });
    })
    .catch(error => {
        console.error("Erro ao buscar bebida:", error);
    });
};
        
        return(
            <MainLayout frase="as bebidas disponíveis" funcao={bebidasAleatorias}>
            {drinks && (
                <div className={styles.apiDrinks}>
                <p>{drinks.name}</p>
                <img src={drinks.image} width="200" />
                </div>
            )}
        </MainLayout>   
    );
};

export { Drinks };