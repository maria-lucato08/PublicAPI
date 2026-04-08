import { NavLink } from "react-router-dom";

import styles from "./Header.module.css";

const Header = () => {
    return(
        <header className={styles.header}>
            <nav className={styles.nav}>
                <NavLink to="/colors">COLORS</NavLink>
                <NavLink to="/drinks">DRINKS</NavLink>
                <NavLink to="/history-facts">HISTORY FACTS</NavLink>
                <NavLink to="/spinners">SPINNERS</NavLink>
            </nav>
        </header>
    );
}

export { Header };