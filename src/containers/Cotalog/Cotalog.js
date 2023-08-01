import React from 'react';
import Header from "../../componets/Header/Header";
import Checkbox from "../../componets/Checkbox/Checkbox";
import Cars from "../../componets/Cars/Cars";
import Advantages from "../../componets/Advantages/Advantages";
import Comentsvideo from "../../componets/Coments-video/Comentsvideo";
import CotalogDot from "../../componets/CotalogDot/CotalogDot";
import Footer from "../../componets/Footer/Footer";

const Catalog = () => {
    return (
        <>

            <Header/>
            <div className="container cotalog">
                <CotalogDot/>
                <Checkbox/>
            </div>
            <Cars/>
            <Footer/>


        </>


    );

};

export default Catalog;