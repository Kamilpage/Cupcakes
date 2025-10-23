import React from 'react';
import styles from './mobApp.module.css'

const MobApp = () => {
    return (
        <section className={styles.mobApp}>
            <div className='container'>
                <div className={styles.mobApp__inner}>
                    <div className={styles.mobApp__inner__info}>
                    <h1>Приготовим заказ <br/> любой сложности <br/> по фото или эскизу</h1>
                    <p>Загрузите фотографию или эскиз капкейков <br/> и мы рассчитаем стоимость за 30 минут</p>
                    <button>Загрузить фотографию</button>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default MobApp;