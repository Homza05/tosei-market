import React from 'react';

const Checkbox = () => {
    return (
        <div>

            <div className="container">

                <form action="submit" className="main-form">
                    <div className="main-form__check">
                        <input type="checkbox" id="full" name="full" className="custom-checkbox custom-checkbox-1"/>
                            <label htmlFor="full" className="full-title">Полная пошлина</label>
                            <input type="checkbox" name="constructor" className="custom-checkbox custom-checkbox-2"
                                   id="constructor"/>
                                <label htmlFor="constructor" className="constructor-title">Распил или
                                    конструктор</label>
                    </div>
                    <div className="form">
                        <div className="form__block">
                            <label htmlFor="type" className="car">Тип техники</label>
                            <select name="type" className="select-name" id="type">
                                <option>Не выбрано</option>
                                <option>Легковые Авто</option>
                                <option>Грузовые Авто</option>
                                <option>Мото</option>
                            </select>
                        </div>
                        <div className="form__block">
                            <label htmlFor="producer" className="car">Производитель</label>
                            <select name="producer" className="select-name" id="producer">
                                <option>Не выбрано</option>
                                <option>Германия</option>
                                <option>Япония</option>
                                <option>Россия</option>
                            </select>
                        </div>
                        <div className="form__block">
                            <label htmlFor="brand" className="car">Марка</label>
                            <select name="brand" className="select-name" id="brand">
                                <option>Не выбрано</option>
                                <option>Тойота</option>
                                <option>Бмв</option>
                                <option>Хонда</option>
                            </select>
                        </div>
                        <div className="form__block">
                            <label htmlFor="year" className="car">Год выпуска</label>
                            <div className="year-block">
                                <select name="year-from" id="year" className="select-name-two">
                                    <option>От</option>
                                    <option>2018</option>
                                </select>
                                <select name="year-to" className="select-name-two">
                                    <option>До</option>
                                    <option>2023</option>
                                </select>
                            </div>
                        </div>
                        <div className="container">
                            <button type="submit" className="form-btn">Найти</button>
                            {/*<span className="cars">Автомобилей в наличии: <span className="cars-red">256</span></span>*/}
                            <select name="search" className="posl">

                                <option>Расширенный поиск</option>
                            </select>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkbox;