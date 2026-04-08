import { Header } from '../../components'

import styles from './MainLayout.module.css';

const MainLayout = ({ children }) => {
    return (
        <div className={styles.mainLayout}>  
            <Header />
            { children }
        </div>
    );
};

export { MainLayout };