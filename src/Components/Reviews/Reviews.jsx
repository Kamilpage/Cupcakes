import React from 'react';
import styles from './reviews.module.css'
import client1 from '../../assets/images/client-1.png'
// import client2 from '../../assets/images/client-2.png'


const Reviews = () => {
    const [clients] = React.useState([
        {
            image: client1,
            name: 'Ирина Ларионова',
            city: 'Санкт-Петербург',
            title: '«Результат дико порадовал, друзья были в восторге»',
            description: '«Заказала капкейки, как подарок на новый год. Делать заказ было легко и приятно, ну а результат дико порадовал, друзья были в восторге. И оформление, и на вкус капкейки были просто замечательные. Обязательно буду заказывать еще)) Уже строю планы, чтобы попробовать все начинки. Они восхитительны!) Даже кушать было жалко, такая красота!) '
        }
        // {
        //     image: client2,
        //     name: 'Елена Демидова',
        //     city: 'Санкт-Петурбург',
        //     title: '«Спасибо за прекрасные капкейки, все на высоте»',
        //     description: '«Вставьте отзыв целиком или часть отзыва клиента. Никогда не выдумывайте отзывы самостоятельно. Фильшивые отзывы всегда видно. Будьте честны.\n' +
        //         'Опишите конечный результат, который получил человек после работы с вами. Что конеретно ему это дало. Можно описывать результат в цифрах, чтобы была конкретика»'
        // }
    ]);
    return (
        <article className={styles.reviews}>
            <div className='container'>
                <div className={styles.reviews__inner}>

            <h1>Почитайте отзывы довольных клиентов</h1>
                {clients.map((client, i) => (
                    <div key={i} className={styles.review__item}>
                        <div className={styles.review__left}>
                            <h1>{client.title}</h1>
                            <p>{client.description}</p>
                            <a href="#">Читать отзыв полностью</a>
                        </div>
                        <div className={styles.review__right}>
                            <img src={client.image} alt={client.name}/>
                            <h2>{client.name}</h2>
                            <h3>{client.city}</h3>
                        </div>
                    </div>

                ))}
                    <div className={styles.review__carusel}>
                    <button>2</button>
                    <button>1</button>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Reviews;