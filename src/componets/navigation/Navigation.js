import React from 'react';
import {Link} from "react-router-dom";
const Navigation = () => {
    return (
        <div>
            <nav>
                <span><Link to="/">Home</Link></span>
                <span><Link to="/uslugi">Услуги</Link></span>
                <span><Link to="/test">Аукцион</Link></span>
                <span><Link to="/catalog">Каталог</Link></span>
            </nav>
        </div>
    );
};

export default Navigation;