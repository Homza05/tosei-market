import React from 'react';
import {Link} from "react-router-dom";
import CarItem from "../CarItem/CarItem";


const Car = props => {
    return (

        <div className="card container">
            <div className="card-container">
                <img src={props.src} alt="fit" className="card-img" width={226} height={148}/>
                <div className="card-block">
                    <div className="card-block__title">
                        <Link to={`/car/CarItem`} element={<CarItem/>}>
                            <h3 className="card-title">{props.name}</h3>

                        </Link>
                    </div>
                    <span className="card-black">Объем двигателя<span
                        className="card-grey">{props.engine}л.с</span></span>
                    <span className="card-black">Год<span className="card-grey">{props.year}год.</span></span>
                    <span className="card-black">Пробег<span className="card-grey"> {props.nileage} км</span></span>
                    <span className="card-first">Под полную пошлину</span>
                </div>
            </div>

                <div className="card-drive">
                    <span className="card-black">Привод<span className="card-grey"></span>{props.drive}</span>
                    <span className="card-black">КПП<span className="card-grey">{props.gearbox}</span></span>
                </div>
                <div className="card-price">
                    <span className="card-price-sity">Стоимость во Владивостоке</span>
                    <span className="card-price-sum"> {props.price}₽ </span>
                    <a className="card-price-is" href="#">{props.availability}</a>
                </div>

        </div>


    );
};


export default Car