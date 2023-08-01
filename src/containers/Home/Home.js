import React from 'react';
import Header from "../../componets/Header/Header";

import Cars from "../../componets/Cars/Cars";
import Checkbox from "../../componets/Checkbox/Checkbox";
import Advantages from "../../componets/Advantages/Advantages";
import Coments from "../../componets/Coments/Coments";
import Comentsvideo from "../../componets/Coments-video/Comentsvideo";
import PopularCar from "../../componets/PopularCar/PopularCar";
import Footer from "../../componets/Footer/Footer";
import CotalogDot from "../../componets/CotalogDot/CotalogDot";
import MainBlock from "../../componets/MainBlock/MainBlock";
import axios from "axios";


const Home = () => {
//     const cars = [
//         {
//             carName: 'Honda Fit',
//             engine: 1.2,
//             mileage: 34000,
//             year: 2015,
//             drive: 'Задний',
//             gearbox: 'Автомат',
//             price: 630000,
//             availability: 'в наличии',
//             src: 'https://s.auto.drom.ru/i24219/c/photos/fullsize/honda/fit/honda_fit_795531.jpg'
//         },
//         {
//             carName: 'BMW - X5',
//             engine: 230,
//             mileage: 110000,
//             year: 2005,
//             drive: 'Полный',
//             gearbox: 'Автомат',
//             price: 275000,
//             availability: 'под заказ',
//             src: 'https://upload.wikimedia.org/wikipedia/commons/2/21/BMW_X5_%28E53%2C_Facelift%29_%E2%80%93_Frontansicht%2C_12._Juni_2011%2C_D%C3%BCsseldorf.jpg'
//         },
//         {
//             carName: 'Toyota Prius',
//             engine: 109,
//             mileage: 57000,
//             year: 2009,
//             drive: 'Передний',
//             gearbox: 'Автомат',
//             price: 310000,
//             availability: 'в наличии',
//             src: 'https://www.automoblog.net/wp-content/uploads/2023/04/2023_PriusPrime_XSE_SupersonicRed_007.jpg'
//         },
//         {
//             carName: 'Nissan Sentra',
//             engine: 130,
//             mileage: 45000,
//             year: 2012,
//             drive: 'Передний',
//             gearbox: 'Автомат',
//             price: 250000,
//             availability: 'в наличии',
//             src: 'https://upload.wikimedia.org/wikipedia/commons/1/16/2013_Nissan_Sentra_in_Montreal.jpg'
//         },
//         {
//             carName: 'Honda Civic',
//             engine: 115,
//             mileage: 68000,
//             year: 2010,
//             drive: 'Передний',
//             gearbox: 'Механика',
//             price: 290000,
//             availability: 'в наличии',
//             src: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/2017_Honda_Civic_SR_VTEC_1.0_Front.jpg'
//         },
//         {
//             carName: 'Ford Focus',
//             engine: 125,
//             mileage: 52000,
//             year: 2011,
//             drive: 'Передний',
//             gearbox: 'Автомат',
//             price: 270000,
//             availability: 'в наличии',
//             src: 'https://avatars.mds.yandex.net/get-verba/997355/2a0000017fb5dcbb8166c3139f13d65f667f/cattouchret'
//         },
//         {
//             carName: 'Chevrolet Cruze',
//             engine: 140,
//             mileage: 60000,
//             year: 2013,
//             drive: 'Передний',
//             gearbox: 'Автомат',
//             price: 320000,
//             availability: 'в наличии',
//             src: 'https://avatars.mds.yandex.net/get-verba/3587101/2a000001805ff9b2443cb3ed6c2f241598a7/cattouchret'
//         },
//         {
//             carName: 'Volkswagen Jetta',
//             engine: 120,
//             mileage: 55000,
//             year: 2012,
//             drive: 'Передний',
//             gearbox: 'Механика',
//             price: 280000,
//             availability: 'в наличии',
//             src: 'https://media.ed.edmunds-media.com/volkswagen/jetta/2022/oem/2022_volkswagen_jetta_sedan_se_fq_oem_1_1600.jpg'
//         },
//         {
//             carName: 'Hyundai Elantra',
//             engine: 120,
//             mileage: 65000,
//             year: 2011,
//             drive: 'Передний',
//             gearbox: 'Механика',
//             price: 260000,
//             availability: 'в наличии',
//             src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Hyundai_Avante_CN7_white_%281%29_%28cropped%29.jpg/1200px-Hyundai_Avante_CN7_white_%281%29_%28cropped%29.jpg'
//         },
//         {
//             carName: 'Kia Optima',
//             engine: 140,
//             mileage: 58000,
//             year: 2013,
//             drive: 'Передний',
//             gearbox: 'Автомат',
//             price: 330000,
//             availability: 'в наличии',
//             src: 'https://avatars.mds.yandex.net/get-verba/997355/2a000001710bb3ee5298211e10994bf056c8/cattouch'
//         },
//         {
//             carName: 'Mazda3',
//             engine: 118,
//             mileage: 52000,
//             year: 2010,
//             drive: 'Передний',
//             gearbox: 'Механика',
//
//
//
//     price: 280000,
//         availability: 'в наличии',
//         src: 'https://www.motortrend.com/uploads/2022/11/2023-Mazda-Mazda3-Sedan-AWD-Turbo-exterior-16.jpg'
// },
//     {
//         carName: 'BMW 3 Series',
//             engine: 160,
//         mileage: 70000,
//         year: 2013,
//         drive: 'Задний',
//         gearbox: 'Автомат',
//         price: 450000,
//         availability: 'в наличии',
//         src: 'https://i.gaw.to/content/photos/50/79/507923-bmw-serie-3-2013-2018-quoi-savoir-avant-d-acheter.jpeg'
//     },
//     {
//         carName: 'Porsche Panamera',
//             engine: 200,
//         mileage: 80000,
//         year: 2014,
//         drive: 'Задний',
//         gearbox: 'Автомат',
//         price: 650000,
//         availability: 'в наличии',
//         src: 'https://motor.ru/thumb/1500x0/filters:quality(75):no_upscale()/imgs/2020/10/24/12/4301722/911af4fced762777626992a7af16d3eb8bf9e500.jpg'
//     }
// ];
//
//     const postData = async () => {
//         console.log('click')
//         try {
//             await  axios.post('https://cars-6517a-default-rtdb.firebaseio.com/cars.json',{
//                 cars
//             })
//         } catch (e) {
//             console.log(e)
//         }


    return (

        <>
            {/*<button onClick={postData}>*/}
            {/*    POST*/}
            {/*</button>*/}

                <Header></Header>
                <MainBlock/>

                <Checkbox/>
                <PopularCar/>
                <Cars/>
                <Advantages/>
                <Comentsvideo/>
                <Footer/>

        </>
    );
};

export default Home;