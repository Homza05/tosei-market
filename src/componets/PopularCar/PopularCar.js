import React from 'react';

const PopularCar = () => {
    return (
        <div>
            <div className="container">
                <div className="popular-block">
                        <h4 className="popular-block__title">Популярные автомобили</h4>
                </div>
                <div className="check-block">
                    <input type="radio" className="custom-radio" id="color-red"/>
                    <label htmlFor="color-red" className="colors">Любые</label>
                    <input type="radio" className="custom-radio" id="color-grey"/>
                    <label htmlFor="color-grey" className="colors">В наличии</label>
                    <input type="radio" className="custom-radio" id="color-black"/>
                    <label htmlFor="color-black" className="colors">Под заказ</label>
                </div>
            </div>
        </div>
    );
};

export default PopularCar;