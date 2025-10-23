import Carousel from "./Carousel.js";
import React from "react";
import a from '../../assets/images/gallery/gallery-1.png'
import b from '../../assets/images/gallery/gallery-2.png'
import c from '../../assets/images/gallery/gallery-3.png'

export default function Galleryy() {
    return <Carousel images={[a, b, c]} />; // autoMs можно не передавать
}
