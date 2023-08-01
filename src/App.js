import React from 'react';
import {Link, Route, Routes} from "react-router-dom";
import Home from "./containers/Home/Home";
import Navigation from "./componets/navigation/Navigation";
import Catalogtalog from "./containers/Cotalog/Cotalog";
import Catalog from "./containers/Cotalog/Cotalog";
import CarItem from "./componets/CarItem/CarItem";
import CarInfo from "./componets/CarInfo/CarInfo";
import CarVideo from "./componets/CarVideo/CarVideo";
// import Subtracttosei from '../../images/Subtracttosei.svg';
import Sub from '../../tosei/src/images/Subtracttosei.svg'

const App = () => {


    return (
        <>

            <div className="sidenav">
                <Link className="logo">
                    <img src={Sub} alt="tosei"/>Tosei
                </Link>

                <ul className="sidenav-list">
                    <li><Link className="sidenav-link" to="/">Home</Link></li>
                    <li><Link className="sidenav-link" to="/catalog">Каталог</Link></li>
                    <li><Link className="sidenav-link" to="/uslugi">Услуги</Link></li>
                    <li><Link className="sidenav-link" to="/test">Аукцион</Link></li>
                    <li><Link className="sidenav-link" to="/contact">Контакты</Link></li>
                    <li><Link className="sidenav-link" to="/info">Информация</Link></li>
                    <li><Link className="sidenav-link" to="/me"> О нас</Link></li>

                </ul>
                <div className="hamburger-menu">
                    <input id="menu__toggle" type="checkbox"/>
                    <label className="menu__btn" htmlFor="menu__toggle">
                        <span></span>
                    </label>
                    <ul className="menu__box">
                        <li><Link className="menu__item" href="#">Home</Link></li>
                        <li><Link className="menu__item" href="#">Каталог</Link></li>
                        <li><Link className="menu__item" href="#">Услуги</Link></li>
                        <li><Link className="menu__item" href="#">Контакты</Link></li>
                        <li><Link className="menu__item" href="#">Информация</Link></li>
                        <li><Link className="menu__item" href="#"> О нас</Link></li>
                    </ul>
                </div>

                <div className="sidenav-icons">
                    <span className="sidenav-icon-whatsapp"><i className="bi bi-whatsapp message"></i></span>
                    <span className="sidenav-icon-instagram"><i className="bi bi-instagram message"></i></span>
                    <span className="sidenav-icon-youtube"><i className="bi bi-youtube message"></i></span>
                </div>

            </div>

                <Navigation/>
                <Routes>

                    <Route path="/"  element={<Home/>}/>
                    <Route path="/catalog"  element={<Catalog/>}/>
                    <Route path="/car/CarItem"  element={<CarItem/>}/>
                    <Route path="/car/CarInfo"  element={<CarInfo/>}/>
                    <Route path="/car/CarVideo"  element={<CarVideo/>}/>

                </Routes>











        </>
    );
};

export default App;