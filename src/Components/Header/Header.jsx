import React from 'react';
import styles from './header.module.css'
import location from '../../assets/images/icons/location.svg'
import phone from '../../assets/images/icons/phone.svg'


const Header = () => {
    return (
        <header className={styles.header}>
            <div className='container'>
                <div className={styles.header__block}>
                    <div className={styles.header__left}>
                        <h1>Сладкий сундук</h1>
                    </div>
                    <div className={styles.header__right}>
                        <div className={styles.header__address}>
                            <img src={location} alt="location"/>
                            <p>г. Санкт Петербург, <br/> ул. Куйбышева 31</p>
                        </div>
                        <div className={styles.header__phone}>
                            <img src={phone} alt="phone"/>
                            <div className={styles.header__schedule}>
                                <p>8 (812) 844-95-49</p>
                                <span>Ежедневно с 9:00 до 20:00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;