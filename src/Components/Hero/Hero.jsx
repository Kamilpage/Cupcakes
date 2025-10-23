import React from 'react';
import styles from './hero.module.css'
import Modal from '../../UI/Modal/Modal.jsx'

const Hero = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <main className={styles.hero}>
            <div className='container'>
                <div className={styles.hero__inner}>
                    <div className={styles.hero__upper}>
                        <h1>Пирожные и капкейки от 150 ₽/шт. с доставкой по Санкт Петербургу</h1>
                        <p>Приготовим за 3 часа в день заказа. <br/> Доставка на авто в холодильнике.</p>
                    </div>
                    <div className={styles.hero__lower}>
                        <a href='#' onClick={()=>handleOpen()}>Перейти в каталог</a>
                        <p>9 различных <br/> видов на выбор</p>
                    </div>
                    <Modal isOpen={open} onClose={handleClose}>
                        <h1>YOU NEED TO SCROLL DOWN</h1>
                        <h2>Press Esc top Escape</h2>
                    </Modal>
                </div>
            </div>
        </main>
    );
};

export default Hero;