import React from 'react';
import styles from './orderStats.moduls.css'
import gallery1 from '../../assets/instagram-img/gallery-1.png'
import gallery2 from '../../assets/instagram-img/gallery-2.png'
import gallery3 from '../../assets/instagram-img/gallery-3.png'
import gallery4 from '../../assets/instagram-img/gallery-4.png'
import gallery5 from '../../assets/instagram-img/gallery-5.png'
import gallery6 from '../../assets/instagram-img/gallery-6.png'
import gallery7 from '../../assets/instagram-img/gallery-7.png'
import gallery8 from '../../assets/instagram-img/gallery-8.png'
import gallery9 from '../../assets/instagram-img/gallery-9.png'


const OrderStats = () => {
    const [gallery] = React.useState([gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9])
    return (
        <section className={styles.gallery}>
            <h1>Сделали более 3.000 заказов за 2 года</h1>
            <p>Посмотрите фото реальных заказов из нашего instagram</p>
            <div>
                {gallery.map((item, index) => (
                    <div key={index}>
                        <img src={item}/>
                    </div>
                ))}

            </div>
        </section>
    );
};

export default OrderStats;