import React from 'react';
import styles from './header.module.css'

const Header = () => {
    return (
        <header>
            <div className={styles.header__block}>
                <div className={styles.header__left}>

                </div>
                <div className={styles.header__right}>
                    <div>
                        <img src="" alt=""/>
                        <p>г. Санкт Петербург,  ул. Куйбышева 31</p>
                    </div>
                    <div>
                        <img src="" alt=""/>
                        <div>
                            <p>8 (812) 844-95-49</p>
                            <span>Ежедневно с 9:00 до 20:00</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;