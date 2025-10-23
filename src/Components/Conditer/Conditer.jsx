import React from 'react';
import styles from './conditer.module.css'
import conditer_img from '../../assets/images/conditer.png'

const Conditer = () => {
    return (
        <section className={styles.conditer__block}>
            <div className={styles.clouds__top}></div>

            <div className={styles.conditer}>

                <div className='container'>
                    <div className={styles.conditer}>
                        <div className={styles.conditer__left}>
                            <h1>Лично приготовлю и всё красиво упакую для вашего события</h1>
                            <ul>
                                <li>Проконсультирую по выбору капкейков <br/> и придумаю нестандартную идею</li>
                                <li>Приготовлю капкейки для вашего события, <br/> которые обязательно всем понравятся
                                </li>
                                <li>Аккуратно и красиво всё упакую, если <br/> вы хотите сделать приятный подарок</li>
                            </ul>
                            <button>Задать вопрос Юлии</button>
                        </div>
                        <div className={styles.conditer__right}>
                            <img src={conditer_img} alt="Юлия Кондратьева"/>
                        </div>
                    </div>


                </div>
            </div>
            <div className={styles.clouds__bottom}></div>


        </section>
    );
};

export default Conditer;