import React from 'react';
import {useState} from "react";
import styles from './gallery.module.css'
import gallery1 from '../../assets/images/gallery/gallery-1.png'
import gallery2 from '../../assets/images/gallery/gallery-2.png'
import gallery3 from '../../assets/images/gallery/gallery-3.png'
import gallery4 from '../../assets/images/gallery/gallery-4.png'
import gallery5 from '../../assets/images/gallery/gallery-5.png'
import gallery6 from '../../assets/images/gallery/gallery-6.png'
import gallery7 from '../../assets/images/gallery/gallery-7.png'
import gallery8 from '../../assets/images/gallery/gallery-8.png'
import gallery9 from '../../assets/images/gallery/gallery-9.png'

const Gallery = () => {
    const [images] = useState([
        {image: gallery1}, {image: gallery2}, {image: gallery3},
        {image: gallery4}, {image: gallery5}, {image: gallery6},
        {image: gallery7}, {image: gallery8}, {image: gallery9}])
    return (
        <section>
            <div className={styles.clouds}></div>
            <div className={styles.gallery__inner}>
                <h1>Сделали более 3.000 заказов за 2 года</h1>
                <p>Посмотрите фото реальных заказов из нашего instagram</p>
                <div className={styles.gallery__grid}>
                    {images.map((image, i) => (<div key={i}>
                        <img src={image.image} alt='photo'/>
                    </div>))}
                </div>
            </div>
            <div className={styles.gallery__bottom}></div>
        </section>
    );
};

export default Gallery;