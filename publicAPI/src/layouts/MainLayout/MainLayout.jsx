import { Header, Button } from '../../components'

import styles from './MainLayout.module.css';

const MainLayout = ({ frase, children, funcao }) => {
    return (
        <div className={styles.mainLayout}>  
            <Header />
            <main className={styles.main}>
                <h2 className={styles.frase}>Veja {frase}!</h2>
                {children}
            </main>
            <div className={styles.buttonContainer}>
               <Button onClick={funcao}/> 
            </div>
        </div>
    );
};

export { MainLayout };