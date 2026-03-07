import styles from './Button.module.css';

const Button = ({ onClick }) => {
    return(
        <button onClick={onClick} className={styles.button} >Clique aqui!</button>
    );
}

export { Button };