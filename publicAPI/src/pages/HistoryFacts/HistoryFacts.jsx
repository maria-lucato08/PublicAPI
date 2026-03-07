import { useState } from "react";
import { MainLayout } from "../../layouts";

import styles from "./HistoryFacts.module.css";

const HistoryFacts = () => {
const [fato, setFato] = useState(null);

function fatosHistoricos() {
fetch("https://history.muffinlabs.com/date")
    .then(response => response.json())
    .then(data => {
       const fact = data.data.Events[0].text;
            fetch(`https://api.mymemory.translated.net/get?q=${fact}&langpair=en|pt`)
            .then(res => res.json())
            .then(data => 
            setFato({ fact: data.responseData.translatedText })
            );

    })
    .catch(error => {
    console.error("Erro ao buscar os fatos históricos:", error);
    });
};

    return(
       <MainLayout frase="o fato histórico de hoje" funcao={fatosHistoricos}>
        <div className={styles.apiHistoryFacts}>
         {fato && <p>{fato.fact}</p>}
        </div>
       </MainLayout>
    );
};


export { HistoryFacts };
