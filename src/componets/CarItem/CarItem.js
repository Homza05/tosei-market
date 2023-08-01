import React from 'react';
import {Link} from "react-router-dom";
import Header from "../Header/Header";
import Cars from "../Cars/Cars";
import Footer from "../Footer/Footer";
import CarInfo from "../CarInfo/CarInfo";
import CarVideo from "../CarVideo/CarVideo";

const CarItem = () => {

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


            <span className="car-attention">
                Обратите внимание
            </span>

            <div className="characteristic-main container">
                <div className="characteristic-block">
                    <span className="characteristic-grey">Производитель:<span className="characteristic-black">Mazda</span></span>
                    <span className="characteristic-grey">Год:<span className="characteristic-black">2017</span></span>
                    <span className="characteristic-grey">Тип кузова:<span className="characteristic-black">Внедорожник</span></span>
                    <span className="characteristic-grey">Цвет:<span className="characteristic-black">Белый</span></span>
                    <span className="characteristic-grey">Руль:<span className="characteristic-black">Левый</span></span>
                    <span className="characteristic-grey">Пробег:<span className="characteristic-black">40 000 км</span></span>
                    <span className="characteristic-grey">Тип привода:<span className="characteristic-black">4WD</span></span>
                    <span className="characteristic-grey">Двигатель:<span className="characteristic-black">Бензиновый (1.5 м³)</span></span>
                </div>
                <div className="characteristic-block">
                    <span className="characteristic-grey">Мощность:<span className="characteristic-black">л.с.</span></span>
                    <span className="characteristic-grey">КПП:<span className="characteristic-black">Автомат</span></span>
                    <span className="characteristic-grey">Аукцион:<span className="characteristic-black">KCAA Fukuoka</span></span>
                    <span className="characteristic-grey">Оценка:<span className="characteristic-black">4 балла</span></span>
                    <span className="characteristic-grey">Дата аукциона:<span className="characteristic-black">08.07.2021</span></span>
                    <span className="characteristic-grey">Местонахождение:<span className="characteristic-black">Япония</span></span>
                    <span className="characteristic-grey">Статус:<span className="characteristic-black">Под заказ</span></span>
                </div>
                <div className="characteristic-block">
                    <span className="characteristic-prices">Стоимость во Владивостоке</span>
                    <span className="characteristic-price">1 630 000 ₽</span>
                    <span className="characteristic-hds">Цена указана с учетом НДС</span>
                    <a className="characteristic-consultation" href="#">Консультация бесплатно</a>
                    <a className="characteristic-application" href="#">Оставить заявку</a>
                </div>
            </div>
            <Cars/>
            <Footer/>

        </div>
    );


};
export default CarItem;