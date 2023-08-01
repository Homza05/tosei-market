import React from 'react';
import Header from "../Header/Header";
import {Link} from "react-router-dom";
import Cars from "../Cars/Cars";
import Footer from "../Footer/Footer";
import CarVideo from "../CarVideo/CarVideo";
import CarItem from "../CarItem/CarItem";

const CarInfo = () => {
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
            <div className="Car-text">
                <div className="characteristic-block">
                    <p className="car-text">
                        Внешний вид нового Mazda CX-3 2017 действительно не дотягивает до полноразмерного кроссовера. Небольшой кузов, невысокая посадка и компактные формы. По внешнему виду дизайнеры попытались создать новый автомобиль, но при этом сохранив современные и узнаваемые черты компании Mazda.
                    </p>
                       <p className="car-text">Переднюю часть кроссовера Mazda CX-3 2017 занимает хорошо узнаваемая решетка радиатора, с зауженной часть внизу. В зависимости от комплектации решетка с горизонтальными планками может быть черной или хромированной, но в любом варианте с хромированной окантовкой. Центр решетки радиатора занимает необычная эмблема компании, в нее инженеры вмонтировали переднюю камеру и несколько датчиков.</p>
                    <p className="car-text">

                        Передняя оптика в зависимости от комплектации Mazda CX-3 2017 может быть на основе галогенок. В максимальной комплектации кроссовера установлена светодиодная адаптивная оптика. В любой с комплектаций оптика сделана таким образом, что внутри повторяет часть хромированной окантовки решетки радиатора, тем самым создавая впечатление, что в оптику вмонтировали часть решетки. Нижнюю часть бампера украшает дополнительная решетка радиатора. Боковую часть бампера в зависимости от комплектации будут установлены противотуманки или комплект светодиодных противотуманок со светодиодными дневными ходовыми огнями.
                    </p>
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

export default CarInfo;