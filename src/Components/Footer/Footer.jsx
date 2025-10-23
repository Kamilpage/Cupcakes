import React from 'react';
import styles from './footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__inner}>
                <div className={styles.footer__block}>

                <h1>Чтобы сделать заказ, укажите ваш телефон</h1>
                <p>Мы перезвоним в течении 15 минут, чтобы уточнить ваши пожелания</p>
                <div className={styles.footer__action}>
                <form action="">
                    <input className={styles.footer__action_inp} type="text" placeholder='Номер телефона'/>
                    <button>Сделать заказ</button>
                </form>
                </div>
                <div className={styles.footer__contracts}>
                <input type="checkbox"/>
                <p>Нажамая на кнопку, вы соглашаетесь с <span>условиями обработки персональных данных</span>
                </p>
                </div>
            </div>
            <div className={styles.footer__contracts_bottom}>
                <div className={styles.footer__info} >
                    <a href="#">Согласие на обработку данных</a>
                    <a href="#">Служба поддержки</a>
                    <a href="#">Политика конфиденциальности</a>
                </div>
                <div className={styles.footer__bottom}>
                    <a href="#">© nazvaniesaita.ru, 2054 | Название компании или ИП ОГРН 0000000000000</a>
                </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;