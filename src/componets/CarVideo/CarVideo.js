import React from 'react';
import Header from "../Header/Header";
import {Link} from "react-router-dom";
import CarInfo from "../CarInfo/CarInfo";
import CarItem from "../CarItem/CarItem";
import Cars from "../Cars/Cars";
import Footer from "../Footer/Footer";

const CarVideo = () => {
    return (
        <div className="container">
            <Header/>
            <div className="container">
                <div className="main-Dot">
                    <span className="dot">Главная <span><i className="bi bi-dot"></i></span><span>Коталог техники</span></span><i className="bi bi-dot"></i><span>
                Mazda CX-3 2017
            </span>
                </div>
            </div>
            <div className="price">
                <span className="cars-name">Mazda CX-3 2017</span>
                <Link className="car-link" href="#">Под заказ</Link>
            </div>
            <div className="car-images">
                <img className="car-img" width={1001} height={252}  src="https://tdrresearch.azureedge.net/photos/chrome/Expanded/White/2017MAS070006/2017MAS07000601.jpg" alt="mazda"/>
                <img className="car-img" width={1001} height={252} src="https://images.hgmsites.net/hug/mazda-cx-3_100555637_h.jpg" alt="mazda"/>
            </div>
            <div className="car-review">
                <Link className="car-review-span" to={`/car/CarItem`} element={<CarItem/>} >
                    <span>
                    Характеристики
                </span>
                </Link>
                <Link className="car-review-span" to={`/car/CarInfo`} element={<CarInfo/>}>
                    <span>
                    Дополнительная информация
                    </span>
                </Link>
                <Link className="car-review-span" to={`/car/CarVideo`} element={<CarVideo/>}>
                        <span>
                    Видеообзор
                        </span>
                </Link>

            </div>
                <div className="Car-video">
                    <div className="iframe-block">
                        <a href="https://youtube.com/watch?v=O-uHBj9BZWg&si=EnSIkaIECMiOmarE">
                            <iframe className="iframe-block" width="308" height="172"
                                    src="https://www.youtube.com/embed/TiL-RVO0GPc"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen></iframe>
                        </a>
                        <a className="flex-cars" href="https://youtube.com/watch?v=O-uHBj9BZWg&si=EnSIkaIECMiOmarE">Компактный
                            минивен I
                            Toyota Siena 2017 г.</a>
                        <div className="flex-row">
                            <span className="flex-span">391 просмотр</span>
                            <span className="flex-after"><i className="bi bi-dot dot"></i> 3 недели назад</span>
                        </div>
                    </div>


                    <div className="characteristic-block characteristic">
                        <span className="characteristic-prices">Стоимость во Владивостоке</span>
                        <span className="characteristic-price">1 630 000 ₽</span>
                        <span className="characteristic-hds">Цена указана с учетом НДС</span>
                        <a className="characteristic-consultation" href="#">Консультация бесплатно</a>
                        <a className="characteristic-application" href="#">Оставить заявку</a>
                    </div>

                </div>
            <span className="car-attention">
                Обратите внимание
            </span>
            <Cars/>
            <Footer/>

        </div>
    );
};

export default CarVideo;