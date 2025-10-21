import React from 'react';
import styles from './hero.module.css'

const Hero = () => {
    return (
        <main className={styles.hero}>
            <div className='container'>
                <div className={styles.hero__inner}>
                    <div className={styles.hero__upper}>
                        <h1>Пирожные и капкейки от 150 ₽/шт. с доставкой по Санкт Петербургу</h1>
                        <p>Приготовим за 3 часа в день заказа. <br/> Доставка на авто в холодильнике.</p>
                    </div>
                    <div className={styles.hero__lower}>
                        <button>Перейти в каталог</button>
                        <p>9 различных <br/> видов на выбор</p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Hero;