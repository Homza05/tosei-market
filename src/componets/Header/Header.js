import React from 'react';
import Subtracttosei from '../../images/Subtracttosei.svg';

const Header = () => {
    return (

            <header className="container header">

                <div className="header__block">
                    <a href="#" className="logo-1">
                        <img className="sidenav-img" src={Subtracttosei} alt="img"/>Tosei
                    </a>
                    <span className="header__block-title">Автомобили из японии с доставкой по всей России</span>
                </div>

                <div className="header__info">
                    <span className="header__info-number">8 800 250-78-07</span>
                    <span className="header__info-text">Бесплатный звонок по всей России</span>
                </div>
            </header>

    );
};

export default Header;