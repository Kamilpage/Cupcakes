import React from 'react';
import {useState} from "react";
import styles from './catalog.module.css'
import cup1 from '../../assets/images/orders/cupcake-1.png'
import cup2 from '../../assets/images/orders/cupcake-2.png'
import cup3 from '../../assets/images/orders/cupcake-3.png'
import cup4 from '../../assets/images/orders/cupcake-4.png'
import cup5 from '../../assets/images/orders/cupcake-5.png'
import cup6 from '../../assets/images/orders/cupcake-6.png'
import cup7 from '../../assets/images/orders/cupcake-7.png'
import cup8 from '../../assets/images/orders/cupcake-8.png'
import cup9 from '../../assets/images/orders/cupcake-9.png'
import Modal from "../../UI/Modal/Modal.jsx";

const Catalog = () => {
    const [cupcakes] = useState([
        {
            id: 1,
            image: cup1,
            title: 'Кремовый замок',
            description: 'Нежный крем любого цвета на выбор, вафельная основа',
            price: '150 ₽/шт.'
        },
        {
            id: 2,
            image: cup2,
            title: 'Малиновый рай',
            description: 'Воздушный крем, темная основа и ягода малины',
            price: '150 ₽/шт.'
        },
        {
            id: 3,
            image: cup3,
            title: 'Фейерверк',
            description: 'Разноцветные крем, с бисквитной основой',
            price: '150 ₽/шт.'
        },
        {
            id: 4,
            image: cup4,
            title: 'Шоколадный мир',
            description: 'Ореховая стружка, нежный крем и шоколадная основа',
            price: '150 ₽/шт.'
        },
        {
            id: 5,
            image: cup5,
            title: 'Слезы дракона',
            description: 'Нежный крем любого цвета на выбор, вафельная основа',
            price: '150 ₽/шт.'
        },
        {
            id: 6,
            image: cup6,
            title: 'Летняя фантазия',
            description: 'Украшения в форме сердец, для любимого человека',
            price: '150 ₽/шт.'
        },
        {
            id: 7,
            image: cup7,
            title: 'Мыс безумия',
            description: 'Разноцветная основа, стружка и нежный крем',
            price: '150 ₽/шт.'
        },
        {
            id: 8,
            image: cup8,
            title: 'Облачная сказка',
            description: 'Светлая основа, нежный крем со стружкой сверху',
            price: '150 ₽/шт.'
        },
        {
            id: 9,
            image: cup9,
            title: 'Темный рыцарь',
            description: 'Тёмная основа, нежный крем и вкусные шарики',
            price: '150 ₽/шт.'
        }
    ])
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <section className={styles.catalog}>
            <div className='container'>
                <div className={styles.catalog__inner}>
                    <h1>Для любых событий и дорогих вам людей </h1>
                    <div className={styles.cupcake__block}>
                        {cupcakes.map((cupcake) => (<div className={styles.cupcake__item} key={cupcake.id}>
                            <img src={cupcake.image} alt={cupcake.title}/>
                            <div className={styles.cupcake__item_info}>
                                <h2>{cupcake.title}</h2>
                                <p>{cupcake.description}</p>
                                <div className={styles.cupcake__item_action}>
                                    <h3>{cupcake.price}</h3>
                                    <button onClick={() => {
                                        handleOpen()
                                    }}>Заказать
                                    </button>
                                </div>
                            </div>
                        </div>))}
                    </div>
                </div>
            </div>
            <Modal isOpen={open} onClose={handleClose}>
                {<div className={styles.cupcake__block}>
                    {cupcakes.map((cupcake) => (<div className={styles.cupcake__item}>
                        <img src={cupcake.image} alt={cupcake.title}/>
                        <div className={styles.cupcake__item_info}>
                            <h2>{cupcake.title}</h2>
                            <p>{cupcake.description}</p>
                            <div className={styles.cupcake__item_action}>
                                <h3>{cupcake.price}</h3>
                                <button>Заказать</button>
                            </div>
                        </div>
                    </div>))}
                </div>}
            </Modal>
            <div className={styles.clouds_bottom}></div>
        </section>
    );
};

export default Catalog;