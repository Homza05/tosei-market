import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="footers-flex container">
                <div className="footer-flex">
                    <span className="footer-title">© Тосэй 2021. Все права защищены</span>
                    <p className="footer-subtitle">Продажа грузовой и спецтехники, легковых автомобилей, водной техники.
                        Любая техника
                        из
                        Японии, США, Кореи,
                        Китая и Сингапура. Авто с аукционов.</p>
                    <span><i
                        className="bi bi-geo-alt "></i><span>Владивосток, ул. Фадеева, д. 47, строение 1</span></span>
                </div>
                <div className="footer-flex-2">
                    <span><i className="bi bi-whatsapp messanger"></i><span className="footer-tel">+7 (984) 198-11-18</span></span>
                    <span><i className="bi bi-whatsapp messanger"></i><span className=" footer-tel">+7 (984) 197-77-78</span></span>
                </div>
                <div className="footer-flex-3">
                    <span><i className=" bi bi-envelope"></i><span className=" footer-mail">spec@tosei.ru</span></span>
                </div>
                </div>

        </div>
    );
};

export default Footer;