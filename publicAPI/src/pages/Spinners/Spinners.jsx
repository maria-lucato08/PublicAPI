import { MainLayout } from '../../layouts';
import genetic from '../../assets/genetic.svg';
import setup from '../../assets/setup.svg';
import universe from '../../assets/universe.svg';
import airplane from '../../assets/airplane.svg';
import apib from '../../assets/apib.svg';

import style from './Spinners.module.css';

const Spinners = () => {
    return(
        <MainLayout>
            <div className={style.containerSpinners}>
                <img src={genetic} className={style.genetic} alt="Spinner" />
                <img src={setup} className={style.setup} alt="Spinner" />
                <img src={universe} className={style.universe} alt="Spinner" />
                <img src={airplane} className={style.airplane} alt="Spinner" />
                <img src={apib} className={style.apib} alt="Spinner" />
            </div>
        </MainLayout>
    );
};

export { Spinners }