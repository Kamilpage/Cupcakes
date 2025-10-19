import React from 'react';
import styles from './hero.module.css'

const Hero = () => {
    return (
        <main className={styles.hero}>
            <div className={styles.hero__inner}>
                <div>
                    <h1>Пирожные и капкейки  от 150 ₽/шт. с доставкой по Санкт Петербургу</h1>
                    <p>Приготовим за 3 часа в день заказа. Доставка на авто в холодильнике.</p>
                </div>
                <div>
                    <button>Перейти в каталог</button>
                <p>9 различных  видов на выбор</p>
                </div>
            </div>
        </main>
    );
};

export default Hero;