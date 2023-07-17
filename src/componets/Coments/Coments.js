import React from 'react';


const Coments = props => {
    return (
                <div className="coments-block">
                    <div className="coments-block__container">
                        <img src={props.src} alt="4ferst-man" className="coments-block__img"/>
                        <span className="coments-block__span">
                            <a href="https://www.youtube.com/" className="coments-block__link"></a>
                        </span>
                        <div className="star">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                        </div>
                        <h5 className="coments-peoples"> {props.name}</h5>
                        <p className="coments-sub-title">{props.car}</p>
                    </div>
                </div>
    );
};

export default Coments;