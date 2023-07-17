import React from 'react';
import RectangleGasan from  '../../images/Rectangle-4gasan.jpg'
import Rectangleman from '../../images/Rectangle-4ferst-man.jpg'
import RectangleGena  from '../../images/Rectangle-4gena.jpg'
import RectangleGenadii  from '../../images/Rectangle-4genadi.jpg'
import Coments from "../Coments/Coments";

const Comentsvideo = () => {
    return (
        <>
            <h2 className="coments-title">Отзывы</h2>
            <div className="coments">
                <Coments
                    name='Генадий Сергеевий'
                    car='Toyota Allion'
                    src={RectangleGasan}
                />
                <Coments
                    name='Ольга Архипова'
                    car='Toyota Allion'
                    src={Rectangleman}
                />
                <Coments
                    name='Николай Евгеньевич'
                    car='Toyota Allion'
                    src={RectangleGenadii}
                />
                <Coments
                    name='Роман Юрьевич'
                    car='Toyota Allion'
                    src={RectangleGena}
                />
            </div>



        </>
    );
};

export default Comentsvideo;