import React from 'react';
import {Link} from "react-router-dom";
import Header from "../Header/Header";

const CarItem = () => {
    return (
        <div>
            <Header/>
            <div className="container">
                <div className="main-Dot">
                    <span className="dot">Главная <span><i className="bi bi-dot"></i></span><span>Коталог техники</span></span><i className="bi bi-dot"></i><span>
                Mazda CX-3 2017
            </span>
                </div>


            </div>
            <div>
                <span>Mazda CX-3 2017</span>
            </div>
        </div>
    );
};
export default CarItem;