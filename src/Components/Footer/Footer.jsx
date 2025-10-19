import React from 'react';
import styles from './footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div>
                <h1>Чтобы сделать заказ, укажите ваш телефон</h1>
                <p>Мы перезвоним в течении 15 минут, чтобы уточнить ваши пожелания</p>
                <form action="">
                    <input type="text" placeholder='Номер телефона'/>
                    <button>Сделать заказ</button>
                </form>
                <input type="checkbox"/>
                <p>Нажамая на кнопку, вы соглашаетесь с <a href="#">
                    условиями обработки персональных данных
                </a>
                </p>
            </div>
            <div>
                <div>
                    <a href="#">Согласие на обработку данных</a>
                    <a href="#">Служба поддержки</a>
                    <a href="#">Политика конфиденциальности</a>
                </div>
                <div>
                    <a href="#">© nazvaniesaita.ru, 2054 | Название компании или ИП ОГРН 0000000000000</a>
                </div>
            </div>

        </footer>
    );
};

export default Footer;