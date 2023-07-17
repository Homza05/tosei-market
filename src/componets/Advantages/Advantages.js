import React from 'react';
import Advantage from "../Advantag/Advantage";
import Vector from '../../images/Vectorvector-10.png'

const Advantages = () => {
    return (
        <>
            <h2 className="Advantages-title">
                Наши преимущества
            </h2>
            <div className="features-cards container">
                <Advantage
                    name="20 лет на рынке"
                    text="Мы транспортируем авто в порт Японии, грузим на судно доставляем во Владивостогде проходит таможенное оформление"
                    src={Vector}/>

                <Advantage
                    name="Доставка по РФ"
                    text="Мы транспортируем авто в порт Японии, грузим на судно и доставляем во Владивосток,где проходит таможенное оформление"
                    src={Vector}/>
                <Advantage
                    name="Персональный менеджер"
                    text="Мы транспортируем авто в порт Японии, грузим на судно доставляем во Владивостогде проходит таможенное оформление"
                    src={Vector}/>
                <Advantage
                    name="Собственное представительство в Японии"
                    src={Vector}
                    text="Мы транспортируем авто в порт Японии, грузим на судно и доставляем во Владивосток где проходит таможенное оформление" />
            </div>
        </>
    );
};

export default Advantages;