import React from 'react';
import styles from './conditer.module.css'
import conditer_img from '../../assets/background-images/conditer.png'

const Conditer = () => {
    return (
        <section>
            <div className='container'>
                <div>
                    <div className={styles.conditer__left}>
                        <h2>Лично приготовлю и всё красиво упакую для вашего события</h2>
                        <ul>
                            <li>Проконсультирую по выбору капкейков и придумаю нестандартную идею</li>
                            <li>Приготовлю капкейки для вашего события, которые обязательно всем понравятся</li>
                            <li>Аккуратно и красиво всё упакую, если вы хотите сделать приятный подарок</li>
                        </ul>
                        <button>Задать вопрос Юлии</button>
                    </div>


                    <div className={styles.conditer__right}>
                        <img src={conditer_img} alt="Юлия Кондратьева"/>
                    </div>
                </div>


            </div>


        </section>
    );
};

export default Conditer;